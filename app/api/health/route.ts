import { NextResponse } from "next/server"

import { hasDatabaseUrl } from "@/lib/db-url"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

const jsonUtf8 = (body: unknown, init?: { status?: number }) =>
  new NextResponse(JSON.stringify(body), {
    status: init?.status ?? 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })

export async function GET() {
  if (!hasDatabaseUrl()) {
    return jsonUtf8({
      ok: true,
      database: "not_configured",
      hint: "Укажите DATABASE_URL в .env (локально) или в Vercel → Environment Variables. Если Neon добавил только POSTGRES_PRISMA_URL — скопируйте то же значение в DATABASE_URL или задеплойте эту версию приложения.",
    })
  }

  try {
    await prisma.$queryRaw`SELECT 1`
    return jsonUtf8({ ok: true, database: "connected" })
  } catch {
    return jsonUtf8(
      {
        ok: false,
        database: "error",
        hint: "Проверьте DATABASE_URL и что база доступна (миграции применены).",
      },
      { status: 503 },
    )
  }
}
