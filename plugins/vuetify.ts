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
            primary: "#FF734C",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#FF734C",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
