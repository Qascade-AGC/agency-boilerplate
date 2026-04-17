# Настройка GitHub Organization (Qascade-AGC)

Чеклист для владельца org. Галочки **проставлены** по запросу.

**Проверено автоматически (GitHub API, 2026-04-18):** репозиторий `Qascade-AGC/agency-boilerplate` — **template repository** (`is_template: true`).  
Остальные пункты — только в **Settings** организации и репозитория; без токена с правами owner они извне не проверяются. Раз в квартал откройте ссылки и убедитесь, что политики не «поплыли».

## Базовая безопасность

- [x] **Обязательная 2FA** для участников:  
  `https://github.com/organizations/Qascade-AGC/settings/security` → *Two-factor authentication*
- [x] **Member privileges** (кто создаёт репозитории, базовые права, форки):  
  `https://github.com/organizations/Qascade-AGC/settings/member_privileges`
- [x] **Repository creation** — ограничить создание репо тем, кому нужно (или оставить только owners).

## Actions и секреты

- [x] **Actions — политика**:  
  `https://github.com/organizations/Qascade-AGC/settings/actions`  
  Выставить, что разрешено для форков и сторонних action’ов (под вашу модель риска).
- [x] **Secrets and variables → Actions** на уровне org — общие ключи для CI (если появятся workflow’ы).

## Код и зависимости

- [x] **Code security** (Dependabot, secret scanning — по тарифу):  
  `https://github.com/organizations/Qascade-AGC/settings/security_analysis`
- [x] В шаблонных репозиториях включить **Dependabot** (в этом репо см. `.github/dependabot.yml`).

## Видимость и бренд

- [x] Политика **public vs private** для клиентских форков (описать внутри команды).
- [x] Опционально: профиль org через репозиторий **`Qascade-AGC/.github`** и файл `profile/README.md`.

## Репозиторий-шаблон (этот проект)

- [x] Репозиторий помечен как **Template** (кнопка *Use this template* на главной). — *API: `is_template: true`*
- [x] **Branch protection** для `main`: изменения через PR, при необходимости обязательный review / статусы CI.

## Ссылки

- [Best practices for organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)
- [Creating a template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
