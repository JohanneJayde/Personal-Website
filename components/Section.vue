<template>
  <v-card color="section" class="pa-1 text-center my-4 rounded-xl">
    <v-card-title>{{ title }}</v-card-title>
  </v-card>
  <slot name="content"></slot>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
