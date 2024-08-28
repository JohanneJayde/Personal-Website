<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h5 font-weight-bold">Public Service</h1>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        v-for="(service, i) in engagementContent"
        :key="i"
      >
        <v-card elevation="3" class="pa-2 fill-height custom-color">
          <v-card-title class="font-weight-bold text-wrap">{{
            service.title
          }}</v-card-title>
          <v-card-subtitle>{{ service.dates }}</v-card-subtitle>
          <v-card-text>{{ service.description }}</v-card-text>

          <v-card-actions class="ml-2">
            <v-btn
              v-for="link in service.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              color="primary"
              variant="outlined"
              >{{ link.text }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const engagementContent = await queryContent("/engagement/").find();
</script>

<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
