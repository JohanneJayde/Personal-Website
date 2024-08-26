<template>
  <v-app class="gradient-background">
    <v-app-bar
      flat
      extension-height="40"
      class="custom-color border-b-sm"
      density="compact"
    >
      <template #prepend v-if="$vuetify.display.mobile">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="text-button"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title
        class="text-button"
        @click="$router.push('/')"
        style="cursor: pointer"
      >
        Johanne McClenahan
      </v-app-bar-title>
      <v-spacer v-if="!$vuetify.display.mobile" />

      <v-btn v-if="!$vuetify.display.mobile" class="custom-btn" to="/Projects">
        Projects
      </v-btn>
      <v-btn
        v-if="!$vuetify.display.mobile"
        class="custom-btn"
        to="/Employment"
      >
        Employment
      </v-btn>
      <v-btn
        v-if="!$vuetify.display.mobile"
        class="custom-btn"
        to="/Engagement"
      >
        Public Service
      </v-btn>
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
    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer app class="border-b-sm custom-color" height="80">
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
  background-color: rgba(255, 255, 255, 0.4) !important;
}
</style>
