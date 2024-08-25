import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors"; // Corrected import path

import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.deepPurple.accent2,
            secondary: colors.deepPurple.accent1,
            section: colors.deepPurple.accent3,
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: colors.deepPurple.accent2,
            secondary: colors.deepPurple.accent1,
            section: colors.deepPurple.accent3,
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
