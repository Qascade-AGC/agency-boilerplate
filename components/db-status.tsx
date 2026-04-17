"use client"

import { useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"

type DbState =
  | { loading: true }
  | {
      loading: false
      database: "not_configured" | "connected" | "error"
      hint?: string
    }

export function DbStatus() {
  const [state, setState] = useState<DbState>({ loading: true })

  useEffect(() => {
    let cancelled = false

    fetch("/api/health")
      .then(async (res) => {
        const data = (await res.json()) as {
          database?: string
          hint?: string
        }
        if (cancelled) return
        const db = data.database
        if (db === "connected" || db === "not_configured" || db === "error") {
          setState({
            loading: false,
            database: db,
            hint: typeof data.hint === "string" ? data.hint : undefined,
          })
        } else {
          setState({
            loading: false,
            database: "error",
            hint: "Неожиданный ответ /api/health",
          })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            loading: false,
            database: "error",
            hint: "Не удалось запросить /api/health",
          })
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (state.loading) {
    return (
      <Badge variant="outline" className="font-normal">
        База: проверка…
      </Badge>
    )
  }

  if (state.database === "connected") {
    return (
      <Badge variant="outline" className="border-emerald-500/40 font-normal">
        База: подключено
      </Badge>
    )
  }

  if (state.database === "not_configured") {
    return (
      <Badge variant="outline" className="font-normal" title={state.hint}>
        База: нет DATABASE_URL
      </Badge>
    )
  }

  return (
    <Badge variant="outline" className="border-red-500/40 font-normal" title={state.hint}>
      База: ошибка
    </Badge>
  )
}
