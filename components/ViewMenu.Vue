<template>
  <v-chip-group>
    <v-chip>Chip 1</v-chip>

    <v-chip>Chip 2</v-chip>

    <v-chip>Chip 3</v-chip>
  </v-chip-group>
</template>

<script setup lang="ts">
const props = defineProps<{
  mode: string | null;
}>();

const items = ["All", "Web", "Mobile", "Design"];
</script>
