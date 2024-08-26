<template>
  <v-card class="pa-3 h-100 custom-color">
    <v-card-title class="text-wrap font-weight-bold text-secondary">{{
      title
    }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ body }}</v-card-text>

    <v-card-actions v-if="links">
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

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  body: string;
  color: string;
  links?: { text: string; href: string }[];
}>();
</script>

<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
