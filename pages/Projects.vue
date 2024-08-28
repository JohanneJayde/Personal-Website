<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h5 font-weight-bold">Projects</h1>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        v-for="(project, i) in projectContent.sort((a, b) =>
          a.dates[0].start < b.dates[0].start ? 1 : -1
        )"
        :key="i"
      >
        <v-card elevation="3" class="pa-2 fill-height custom-color">
          <v-card-title class="font-weight-bold text-wrap">
            {{ project.title }}
          </v-card-title>
          <v-card-subtitle class="text-wrap">
            {{ getDates(project) }}
          </v-card-subtitle>
          <v-card-text>{{ project.stinger }}</v-card-text>
          <v-card-item>
            <v-chip
              v-for="tech in project.techStack"
              :key="tech"
              variant="tonal"
              color="primary"
              class="mr-2 mb-2"
              >{{ tech }}</v-chip
            >
          </v-card-item>
          <v-card-actions class="ml-2">
            <v-btn :to="project._path" color="primary" variant="outlined"
              >Learn More</v-btn
            >
            <v-btn
              v-for="link in project.links"
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
import type { ParsedContent } from "@nuxt/content/types";
import { format } from "date-fns";

const projectContent = await queryContent("/project/").find();

const getDates = (project: ParsedContent) => {
  const formatStartDate = format(new Date(project.dates[0].start), "MMMM yyyy");
  const formatEndDate =
    project.dates[0].end == "Pressent" || !project.dates[0].end
      ? null
      : format(new Date(project.dates[0].end), "MMMM yyyy");
  const dateString = formatStartDate;

  if (project.dates[0].end === "Pressent") {
    return `${dateString} - Present`;
  } else if (project.dates[0].end == null) {
    return `${dateString}`;
  }
  return `${dateString} - ${formatEndDate}`;
};
</script>

<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
