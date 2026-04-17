import Link from "next/link"

import { auth } from "@/auth"
import { DbStatus } from "@/components/db-status"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default async function Home() {
  const session = await auth()

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">Agency Boilerplate</Badge>
            <DbStatus />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight">
              Ready for future client projects
            </h1>
            <p className="max-w-2xl text-[var(--foreground)]/70">
              Base template with reusable UI primitives for landing pages,
              dashboards, and internal tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {session ? (
              <Link
                href="/dashboard"
                className={cn(buttonVariants(), "inline-flex")}
              >
                Кабинет{session.user?.name ? ` — ${session.user.name}` : ""}
              </Link>
            ) : (
              <Link href="/login" className={cn(buttonVariants(), "inline-flex")}>
                Войти
              </Link>
            )}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick contact form example</CardTitle>
            <CardDescription>
              This block shows that the template already includes a usable UI layer.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Input placeholder="Project name" />
            <Input placeholder="Client email" />
            <Textarea placeholder="Project brief" />
            <div>
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
