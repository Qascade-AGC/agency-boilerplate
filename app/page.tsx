import Button from "../components/Button"

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <span className="badge">Qascade Template</span>
        <h1>Agency Boilerplate</h1>
        <p>
          Minimal base for client websites, dashboards, and internal tools.
        </p>

        <div className="actions">
          <Button>Start project</Button>
          <Button variant="secondary">View docs</Button>
        </div>
      </section>
    </main>
  )
}
