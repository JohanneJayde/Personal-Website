<template>
  <v-card class="pa-3 w-100 custom-color">
    <span class="text-wrap font-weight-bold">{{ title }} </span>
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
