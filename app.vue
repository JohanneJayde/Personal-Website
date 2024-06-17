<template>
  <v-app>
    <v-app-bar flat color="primary">
      <v-app-bar-title class="text-center font-weight-bold"
        >Johanne McClenahan
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer app color="primary">
      <span>&copy; {{ new Date().getFullYear() }} Johanne McClenahan</span>
      <v-spacer></v-spacer>
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
</script>
