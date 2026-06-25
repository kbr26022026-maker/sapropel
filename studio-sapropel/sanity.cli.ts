import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '86beff8b',
    dataset: 'production'
  },
  // Hostname of the hosted Studio: https://sapropel-ecoorganica.sanity.studio
  studioHost: 'sapropel-ecoorganica',
  deployment: {
    appId: 'vwe4oq0gl6yxhky7xkptnqri',
    /**
     * Pin the deployed Studio to the exact version we build & test against.
     * Auto-updates are disabled to avoid runtime/build version drift (which can
     * cause a blank Studio). To update: bump deps and run `npm run deploy`.
     */
    autoUpdates: false,
  },
})
