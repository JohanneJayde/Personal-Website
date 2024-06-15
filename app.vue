<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-title @click="$router.push('/')" style="cursor: pointer">
        Johanne McClenahan
      </v-app-bar-title>
      <v-btn to="Projects">Projects</v-btn>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
