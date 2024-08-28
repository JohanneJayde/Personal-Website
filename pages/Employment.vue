<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h5 font-weight-bold">Employment</h1>
      </v-col>
      <v-col cols="12" lg="6" v-for="(job, i) in employmentContent" :key="i">
        <v-card elevation="3" class="pa-2 fill-height custom-color">
          <v-card-title class="font-weight-bold text-wrap">{{
            job.title
          }}</v-card-title>
          <v-card-subtitle>{{ job.dates }}</v-card-subtitle>
          <v-card-text>{{ job.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const employmentContent = await queryContent("/employment/").find();
</script>
<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
