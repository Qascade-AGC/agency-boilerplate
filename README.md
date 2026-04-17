# Agency Boilerplate

Базовый шаблон для клиентских и внутренних проектов агентства.

Используется как стартовая точка для:
- лендингов
- SaaS / админок
- внутренних инструментов
- MVP проектов

---

## Stack

- Next.js (App Router)
- React
- TypeScript
- PostgreSQL + Prisma (миграции в `prisma/migrations`)
- CSS (базовые стили)
- GitHub templates (issues + PR)

---

## What’s included

- Готовая структура проекта (`app`, `components`, `lib`, `styles`)
- Базовый layout
- Пример страницы
- Примитивный UI (Button, Card, Input…)
- Prisma + пример проверки БД (`/api/health`, бейдж на главной)
- Утилиты (`lib/utils.ts`)
- `.env.example`
- Issue templates
- PR template

---

## Setup

```bash
npm install
npm run dev
```

---

## База данных (простыми словами)

1. Скопируйте переменные: `cp .env.example .env`
2. **Локально:** поднимите Postgres (`docker compose up -d`), в `.env` укажите `DATABASE_URL` как в `.env.example`
3. Примените миграции (создаёт таблицы в базе):

```bash
npx prisma migrate deploy
```

Для разработки с автогенерацией миграций после смены `schema.prisma`:

```bash
npm run db:migrate
```

На **Vercel** добавьте `DATABASE_URL` в Environment Variables (строка от Neon, Supabase и т.д.) и один раз выполните миграции против этой базы (с вашего компьютера с тем же `DATABASE_URL` или через CI).

Проверка: на главной странице бейдж **«База»**, либо запрос `GET /api/health`.
