<template>
  <v-app>
    <v-app-bar flat color="primary">
      <v-app-bar-title class="font-weight-bold">
        Johanne McClenahan
      </v-app-bar-title>
      <v-spacer />
      <v-btn
        href="https://github.com/JohanneJayde"
        target="_blank"
        variant="outlined"
        >Github</v-btn
      >
      <v-btn
        href="https://www.linkedin.com/in/johannemcclenahan/"
        target="_blank"
        variant="outlined"
        >LinkedIn</v-btn
      >
      <v-btn-toggle v-model="viewMode">
        <v-btn value="blue"> Blue </v-btn>
        <v-btn value="green"> Green </v-btn>
        <v-btn value="red"> Red </v-btn>
      </v-btn-toggle>
      <template #extension>
        <ViewMenu :mode="viewMode" />
      </template>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer app color="primary">
      <span>&copy; {{ new Date().getFullYear() }} Johanne McClenahan</span>
      <v-spacer />
      <span>Contact: johanne.jayde@gmail.com</span>
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

const viewMode = ref<string | null>("red");
</script>
