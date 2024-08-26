<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Jobs that I have had</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" v-for="(job, i) in employmentContent" :key="i">
        <v-card elevation="3" class="pa-2 fill-height">
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
