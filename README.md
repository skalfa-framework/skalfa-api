<p align="center">
  <img src="https://raw.githubusercontent.com/skalfa-framework/skalfa/main/logo/logo-skalfa-full.png" alt="Skalfa Logo" width="300" />
</p>

# @skalfa/skalfa-api

> Premium backend starter template powered by Elysia and Bun, pre-configured with modular utilities.

---

## About this Package

This package is part of the **Skalfa Framework**, a premium development ecosystem designed to build high-performance, modular web applications and APIs.

---

## Dokumentasi

Lihat dokumentasi penggunaan [Dokumentasi](https://skalfa.sejedigital.com)

---

## Installation

You can install this package using your preferred package manager:

```bash
# Using npm
npm install @skalfa/skalfa-api

# Using bun
bun add @skalfa/skalfa-api
```

---

## Development & Production Scripts

This backend starter template provides the following CLI execution scripts:

### 💻 Development
* **`bun run dev`**: Starts the Elysia API server in hot-reload watch mode.
* **`bun run dev:all`**: Concurrently starts the main API server and any background workers (queues, sockets, crons) in development watch mode.

### 📦 Build & Production
* **`bun run build`**: Compiles the Elysia backend application into optimized production JavaScript.
* **`bun run start`**: Starts the production-built Elysia API server.

### ⚙️ Background Workers (Optional Extensions)
* **`bun start:cron`**: Launches the automated cron scheduler and background task runner worker.
* **`bun start:queue`**: Launches the Redis-backed queue listener and background job worker.
* **`bun start:socket`**: Launches the real-time Socket.io server gateway.

---

## Pre-installed Dependencies

The following key dependencies are packaged and managed within this project:

| Dependency | Scope | Version |
| :--- | :--- | :--- |
| `@skalfa/skalfa-api-core` | runtime | `^1.0.2` |
| `@skalfa/skalfa-orm` | runtime | `^1.0.0` |
| `bcrypt` | runtime | `^6.0.0` |
| `dotenv` | runtime | `^17.2.2` |
| `elysia` | runtime | `^1.2.0` |
| `knex` | runtime | `^3.1.0` |
| `pg` | runtime | `^8.16.3` |
| `nodemailer` | runtime | `^7.0.9` |
| `tsconfig-paths` | runtime | `^4.2.0` |
| `validator` | runtime | `^13.15.15` |
| `commander` | runtime | `^12.1.0` |
| `eslint` | development | `^10.0.0` |

---

## License

This package is licensed under the **MIT License**. For full license text, see the [LICENSE](LICENSE) file.
