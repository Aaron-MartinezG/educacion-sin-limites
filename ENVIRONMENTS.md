# Definición de Ambientes — Educación Sin Límites

## Resumen

Este documento define los tres ambientes del ciclo de vida del proyecto y las diferencias de configuración entre ellos.

---

## DEV (Desarrollo Local)

| Parámetro | Valor |
|-----------|-------|
| URL | `http://localhost:3000` |
| Base de datos | No conectada (mock data) |
| Autenticación | Bypass simulado (usuario hardcodeado) |
| Variables de entorno | `.env.local` (no versionado) |
| Comando | `npm run dev` |

**Características:**
- Hot-reload activo con Turbopack
- Todos los datos provienen de JSONs estáticos en `/data`
- El progreso y resultados se guardan en memoria del navegador (se pierden al recargar)
- Supabase instalado pero sin lecturas/escrituras en runtime
- NextAuth instalado y configurado, pero el login usa un bypass con usuario falso

---

## QA (Pruebas / Staging)

| Parámetro | Valor |
|-----------|-------|
| URL | Por definir (ej. `https://staging.educacion-sin-limites.vercel.app`) |
| Base de datos | Supabase proyecto de staging |
| Autenticación | NextAuth con proveedor real |
| Variables de entorno | Configuradas en proveedor de hosting (Vercel) |
| Comando | `npm run build && npm run start` |

**Características:**
- CI/CD ejecuta tests antes del deploy
- Build de producción (`npm run build`) debe pasar sin errores
- Se habilitaría la integración real con Supabase
- Los tests de Jest deben estar en verde

---

## PROD (Producción)

| Parámetro | Valor |
|-----------|-------|
| URL | Por definir (ej. `https://educacion-sin-limites.vercel.app`) |
| Base de datos | Supabase proyecto de producción |
| Autenticación | NextAuth con credenciales reales |
| Variables de entorno | Secretos gestionados en proveedor (Vercel / AWS) |
| Comando | Deploy automático desde rama `main` vía GitHub Actions |

**Características:**
- Deploy automático al hacer merge a `main`
- Pipeline CI/CD completo: lint → test → build → deploy
- Monitoreo y logs habilitados
- HTTPS obligatorio

---

## Limitaciones del MVP (Demo Local)

Las siguientes características **no están implementadas** en el MVP y son limitaciones declaradas:

1. **Persistencia de datos**: El progreso y resultados de quiz se almacenan en memoria del navegador y se pierden al recargar la página.
2. **Autenticación real**: El login es un bypass que inyecta un usuario simulado. No valida credenciales.
3. **Base de datos**: Supabase está configurado en el cliente pero no se realizan consultas en runtime.
4. **Multiusuario**: El MVP soporta un único usuario de demo.

Estas limitaciones están declaradas intencionalmente. El stack (Next.js + NextAuth + Supabase) está preparado para conectarse a servicios reales en los ambientes QA y PROD.

---

## Pipeline CI/CD

El archivo `.github/workflows/ci.yml` ejecuta en cada push a `main` y `develop`:

1. **Lint** — `npm run lint`
2. **Tests** — `npm test`
3. **Build** — `npm run build`

El badge de estado del pipeline aparece en el `README.md`.
