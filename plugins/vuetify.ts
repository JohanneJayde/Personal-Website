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
            primary: "##F89880",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "##F89880",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
