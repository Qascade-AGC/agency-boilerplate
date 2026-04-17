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
- Auth.js (NextAuth v5) + GitHub OAuth, JWT-сессии, защита `/dashboard`
- CSS (базовые стили)
- GitHub templates (issues + PR)
- CI: GitHub Actions — `npm ci` и `npm run build` на push/PR в `main` (`.github/workflows/ci.yml`)

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
- Чеклист для настройки **GitHub Organization** — `.github/ORGANIZATION_SETUP.md`; политика уязвимостей — `SECURITY.md`; обновления зависимостей — Dependabot (`.github/dependabot.yml`); **отчёт по шаблону** — `docs/PROJECT_REPORT.md`

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

---

## Вход (GitHub)

1. В `.env` задайте **`AUTH_SECRET`** (например `openssl rand -base64 32`).
2. Создайте [GitHub OAuth App](https://github.com/settings/developers):  
   - **Homepage URL:** `http://localhost:3000` (в проде — URL с Vercel).  
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github` (в проде — `https://<проект>.vercel.app/api/auth/callback/github`).
3. Вставьте **Client ID** и **Client secrets** в **`AUTH_GITHUB_ID`** и **`AUTH_GITHUB_SECRET`** (локально и в Vercel → Environment Variables).
4. Примените миграции (включая таблицы Auth.js), если ещё не:

```bash
npx prisma migrate deploy
```

5. Откройте **`/login`** → «Войти через GitHub». Маршрут **`/dashboard`** без сессии перенаправляет на вход (**`middleware.ts`**).

На Vercel включите **`trustHost`**: уже в конфиге; добавьте те же **`AUTH_*`** переменные, что локально, и пересоберите проект.
