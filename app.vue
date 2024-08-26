<template>
  <v-app class="gradient-background">
    <v-app-bar
      :absolute="true"
      flat
      :class="!$vuetify.display.mobile ? '' : 'custom-color'"
      extension-height="40"
      :color="!$vuetify.display.mobile ? 'transparent' : ''"
    >
      <template #prepend v-if="$vuetify.display.mobile">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="text-button" />
      </template>

      <v-app-bar-title v-if="$vuetify.display.mobile" class="text-button">
        <span @click="$router.push('/')">Johanne McClenahan</span>
      </v-app-bar-title>

      <v-row v-if="!$vuetify.display.mobile">
        <v-col />
        <v-col
          align="center"
          class="text-button cursor-pointer font-weight-bold"
        >
          <span @click="$router.push('/')">Johanne McClenahan</span>
        </v-col>
        <v-col align="end">
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
useHead({
  title: "Johanne McClenahan",
  meta: [
    {
      name: "description",
      content: "Johanne McClenahan Portfolio",
    },
  ],
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
