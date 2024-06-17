<template>
  <v-card
    class="pa-3 rounded-xl d-flex justify-center align-center"
    height="100"
    width="100"
    color="primary"
  >
    <span class="text-wrap font-weight-bold">{{ title }} </span>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>
