/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Injected at build time from `WEBHOOK_URL` or `VITE_WEBHOOK_URL` (see vite.config.ts). */
  readonly WEBHOOK_URL: string;
}
