import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors"; // Corrected import path

import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.deepPurple.darken1,
            secondary: colors.deepPurple.lighten4,
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: colors.deepPurple.darken1,
            secondary: colors.deepPurple.lighten4,
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
