import Link from "next/link"
import { redirect } from "next/navigation"

import { auth, signOut } from "@/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) {
    redirect("/login")
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Личный кабинет</CardTitle>
            <CardDescription>
              Защищённый маршрут: без входа сюда не пускает middleware.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="text-sm">
              <p>
                <span className="text-[var(--foreground)]/60">Имя:</span>{" "}
                {session.user.name ?? "—"}
              </p>
              <p>
                <span className="text-[var(--foreground)]/60">Email:</span>{" "}
                {session.user.email ?? "—"}
              </p>
              <p className="break-all text-xs text-[var(--foreground)]/60">
                id: {session.user.id}
              </p>
            </div>
            <form
              action={async () => {
                "use server"
                await signOut({ redirectTo: "/" })
              }}
            >
              <Button type="submit" variant="secondary">
                Выйти
              </Button>
            </form>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex w-full justify-center",
              )}
            >
              На главную
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
