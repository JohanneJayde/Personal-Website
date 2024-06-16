<template>
  <v-card :color="color" class="pa-3">
    <v-card-title class="text-wrap">{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ body }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  body: String,
  color: String,
});
</script>
