<template>
  <v-card class="pa-3 rounded-xl h-100">
    <v-card-title class="text-wrap font-weight-bold text-secondary">{{
      title
    }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ body }}</v-card-text>

    <v-card-actions>
      <v-btn
        v-for="link in links"
        :key="link.text"
        :href="link.href"
        target="_blank"
        color="secondary"
        variant="outlined"
      >
        {{ link.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-card {
  border: 4px solid rgb(var(--v-theme-primary));
}
</style>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  body: String,
  color: String,
  links: Array<{ text: string; href: string }>,
});
</script>
