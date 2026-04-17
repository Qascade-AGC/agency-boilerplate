/**
 * Neon на Vercel часто задаёт POSTGRES_PRISMA_URL / POSTGRES_URL.
 * Prisma в schema ожидает DATABASE_URL — подставляем fallback до создания клиента.
 */
export function ensureDatabaseUrl(): void {
  if (process.env.DATABASE_URL?.trim()) return
  const fallback =
    process.env.POSTGRES_PRISMA_URL?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    process.env.DATABASE_URL_UNPOOLED?.trim()
  if (fallback) {
    process.env.DATABASE_URL = fallback
  }
}

export function hasDatabaseUrl(): boolean {
  ensureDatabaseUrl()
  return Boolean(process.env.DATABASE_URL?.trim())
}
