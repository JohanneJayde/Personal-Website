<template>
  <v-card class="pa-3 w-100" variant="outlined">
    <span class="text-wrap">{{ title }} </span>
  </v-card>
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
