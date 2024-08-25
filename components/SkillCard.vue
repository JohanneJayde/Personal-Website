<template>
  <v-card class="pa-3 w-100" color="primary">
    <span class="text-wrap font-weight-bold">{{ title }} </span>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
