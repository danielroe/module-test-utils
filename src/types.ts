import { NuxtConfig, NuxtOptions } from '@nuxt/types'

export interface NuxtTestContext {
  __dirname: string
  fixture: string
  configFile: string

  rootDir: string
  config: NuxtConfig
  nuxt: {
    options: NuxtOptions
    listen: (port?: number) => any
    ready: () => any
    close: () => any
    moduleContainer: any
  }

  browser: any // TIB
  browserString: string
  browserOptions: any

  build: boolean
  builder: {
    build: () => any
  }
  buildTimeout: number

  generate: boolean
  generateOptions: {
    build: boolean
    init: boolean
  }

  waitFor: number

  server: boolean
  url: string
}
