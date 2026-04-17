# Настройка GitHub Organization (Qascade-AGC)

Чеклист для владельца org. Отмечайте пункты по мере выполнения.

## Базовая безопасность

- [ ] **Обязательная 2FA** для участников:  
  `https://github.com/organizations/Qascade-AGC/settings/security` → *Two-factor authentication*
- [ ] **Member privileges** (кто создаёт репозитории, базовые права, форки):  
  `https://github.com/organizations/Qascade-AGC/settings/member_privileges`
- [ ] **Repository creation** — ограничить создание репо тем, кому нужно (или оставить только owners).

## Actions и секреты

- [ ] **Actions — политика**:  
  `https://github.com/organizations/Qascade-AGC/settings/actions`  
  Выставить, что разрешено для форков и сторонних action’ов (под вашу модель риска).
- [ ] **Secrets and variables → Actions** на уровне org — общие ключи для CI (если появятся workflow’ы).

## Код и зависимости

- [ ] **Code security** (Dependabot, secret scanning — по тарифу):  
  `https://github.com/organizations/Qascade-AGC/settings/security_analysis`
- [ ] В шаблонных репозиториях включить **Dependabot** (в этом репо см. `.github/dependabot.yml`).

## Видимость и бренд

- [ ] Политика **public vs private** для клиентских форков (описать внутри команды).
- [ ] Опционально: профиль org через репозиторий **`Qascade-AGC/.github`** и файл `profile/README.md`.

## Репозиторий-шаблон (этот проект)

- [ ] Репозиторий помечен как **Template** (кнопка *Use this template* на главной).
- [ ] **Branch protection** для `main`: изменения через PR, при необходимости обязательный review / статусы CI.

## Ссылки

- [Best practices for organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)
- [Creating a template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
