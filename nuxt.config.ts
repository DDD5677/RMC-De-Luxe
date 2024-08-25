// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: false },
   css: ["~/assets/css/main.css"],
   runtimeConfig: {
      googleApi: process.env.GOOGLE_API_KEY,
      mapId: process.env.MAP_ID, // can be overridden by NUXT_API_SECRET environment variable
      public: {
         googleApi: process.env.GOOGLE_API_KEY,
         mapId: process.env.MAP_ID,
      },
   },
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },

   modules: [
      [
         "@nuxtjs/google-fonts",
         {
            families: {
               Jost: {
                  wght: [300, 400, 500, 600, 700, 800, 900],
               },
            },
         },
      ],
   ],
});
