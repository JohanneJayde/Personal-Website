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
