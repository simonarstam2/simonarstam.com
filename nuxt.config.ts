import fs from 'fs-extra';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    // disable auto import
    imports: {
        autoImport: false
    },
    // disable auto import in components folder
    components: {
        dirs: []
    },
    hooks: {
        'close': () => {
            fs.copy('./CNAME', './dist/CNAME')
                .then(() => console.log('CNAME file copied successfully.'))
                .catch((error: any) => console.error('An error occurred while copying the CNAME file.', error));
        }
    }
})
  