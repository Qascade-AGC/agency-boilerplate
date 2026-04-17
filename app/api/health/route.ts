import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export async function GET() {
  const hasUrl = Boolean(process.env.DATABASE_URL?.trim())

  if (!hasUrl) {
    return NextResponse.json({
      ok: true,
      database: "not_configured",
      hint: "Укажите DATABASE_URL в .env (локально) или в Vercel → Environment Variables.",
    })
  }

  try {
    await prisma.$queryRaw`SELECT 1`
    return NextResponse.json({ ok: true, database: "connected" })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        database: "error",
        hint: "Проверьте DATABASE_URL и что база доступна (миграции применены).",
      },
      { status: 503 },
    )
  }
}
