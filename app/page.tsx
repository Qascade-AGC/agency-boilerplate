import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="space-y-4">
          <Badge variant="outline">Agency Boilerplate</Badge>

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
            <Button>Start project</Button>
            <Button variant="secondary">Documentation</Button>
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
