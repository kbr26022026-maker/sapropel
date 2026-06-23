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
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
