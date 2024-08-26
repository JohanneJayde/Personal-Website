<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Public Service</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="6"
        v-for="(service, i) in engagementContent"
        :key="i"
      >
        <v-card elevation="3" class="pa-2 fill-height">
          <v-card-title class="font-weight-bold text-wrap">{{
            service.title
          }}</v-card-title>
          <v-card-subtitle>{{ service.dates }}</v-card-subtitle>
          <v-card-text>{{ service.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const engagementContent = await queryContent("/engagement/").find();
</script>
