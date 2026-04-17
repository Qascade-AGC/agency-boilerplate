import Link from "next/link"

import { signIn } from "@/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginPage() {
  const githubReady =
    Boolean(process.env.AUTH_GITHUB_ID) &&
    Boolean(process.env.AUTH_GITHUB_SECRET)

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Вход</CardTitle>
          <CardDescription>
            Войдите через GitHub. Локально нужны AUTH_GITHUB_ID и
            AUTH_GITHUB_SECRET (см. README).
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {githubReady ? (
            <form
              action={async () => {
                "use server"
                await signIn("github", { redirectTo: "/dashboard" })
              }}
            >
              <Button type="submit" className="w-full">
                Войти через GitHub
              </Button>
            </form>
          ) : (
            <p className="text-sm text-[var(--foreground)]/70">
              GitHub OAuth не настроен: задайте AUTH_GITHUB_ID и
              AUTH_GITHUB_SECRET в <code className="rounded bg-black/5 px-1">.env</code> и перезапустите{" "}
              <code className="rounded bg-black/5 px-1">npm run dev</code>.
            </p>
          )}
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex w-full justify-center",
            )}
          >
            На главную
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
