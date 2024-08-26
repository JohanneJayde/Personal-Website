<template>
  <v-card class="pa-1 text-center my-4" color="transparent" elevation="0">
    <v-card-title>{{ title }}</v-card-title>
  </v-card>
  <slot name="content"></slot>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
