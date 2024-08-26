<template>
  <v-app class="gradient-background">
    <v-app-bar flat dense v-if="isMobile" class="custom-color">
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="text-button" />
      </template>

      <v-app-bar-title
        @click="$router.push('/')"
        class="text-button font-weight-bold cursor-pointer"
      >
        Johanne McClenahan
      </v-app-bar-title>
    </v-app-bar>
    <v-app-bar v-else :absolute="true" flat color="transparent">
      <v-row>
        <v-col cols="3" />
        <v-col align="center" cols="6">
          <v-app-bar-title
            @click="$router.push('/')"
            class="text-button font-weight-bold cursor-pointer fill-height d-flex justify-center align-center"
          >
            Johanne McClenahan
          </v-app-bar-title>
        </v-col>
        <v-col cols="3">
          <v-btn
            class="custom-btn font-weight-bold"
            to="/Projects"
            text="Projects"
          />
          <v-btn
            class="custom-btn font-weight-bold"
            to="/Employment"
            text="Employment"
          />
          <v-btn
            class="custom-btn font-weight-bold"
            to="/Engagement"
            text="Public Service"
          />
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary class="custom-color">
      <v-list>
        <v-list-item
          v-for="item in ['Projects', 'Employment', 'Engagement']"
          :key="item"
          @click="$router.push('/' + item)"
        >
          <v-list-item-title class="text-button">{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="fill-height">
      <NuxtPage />
    </v-main>

    <v-footer :absolute="true" class="border-b-sm">
      <v-row no-gutters class="justify-center align-center">
        <v-col cols="12" class="text-center">
          <span class="text-button footer-content">
            &copy; {{ new Date().getFullYear() }} Johanne McClenahan
          </span>
        </v-col>
        <v-col cols="12" class="text-center">
          <span class="text-button footer-content"
            >Contact: johanne.jayde@gmail.com</span
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

useHead({
  title: "Johanne McClenahan",
  meta: [
    {
      name: "description",
      content: "Johanne McClenahan Portfolio",
    },
  ],
});

const isMobile = ref(false);
const display = useDisplay();

nextTick(() => {
  isMobile.value = display.mobile.value;
});

const drawer = ref(false);
</script>

<style scoped>
.gradient-background {
  background-image: linear-gradient(
    to bottom right,
    rgb(211, 193, 255),
    #f5dbff,
    #f5dbff,
    rgb(211, 193, 255)
  );
}

.custom-color {
  background-color: rgba(255, 255, 255, 0.6) !important;
}
</style>
