/* eslint-disable */
/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
  }
}

interface ImportMetaEnv {
  readonly VITE_NAME_FULL: string
  readonly VITE_NAME_SHORT: string
  readonly VITE_DESCRIPTION: string

  readonly VITE_BUILD_DATE: string
  readonly VITE_VERSION: string

  readonly VITE_API_PROTOCOL: string
  readonly VITE_API_DOMAIN: string
  readonly VITE_API_PORT: string
  readonly VITE_API_HOST: string
  readonly VITE_API_VERSION: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
  readonly VITE_ROUTER_BASE: string
  readonly VITE_SERVER: string

  readonly VITE_PORT: string | number
  readonly VITE_OPEN_DEV_IN_BROWSE: boolean | string
  readonly VITE_DARK: boolean | 'auto'

  readonly VITE_API_KEY: string
  readonly VITE_AUTH_DOMAIN: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_STORAGE_BUCKET: string
  readonly VITE_MESSAGING_SENDER_ID: string
  readonly VITE_APP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
