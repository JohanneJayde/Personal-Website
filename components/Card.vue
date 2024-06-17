<template>
  <v-card class="pa-3 rounded-xl">
    <v-card-title class="text-wrap font-weight-bold text-secondary">{{
      title
    }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ body }}</v-card-text>
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
});
</script>
