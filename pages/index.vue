<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6">
        <v-card class="pa-3 custom-color">
          <v-card-item>
            <v-img src="~/assets/photography.jpeg" height="300px" cover />
          </v-card-item>
          <v-card-text class="text-body-1 my-3">
            Hello, My name is Johanne McClenahan! I am a recent graduate from
            Eastern Washington University in June 2024. My major is Computer
            Science with a minor in Web Application Development. My hobbies
            include puzzles, hiking, and scootering. I hope to learn more and
            keep growing in the Computer Science field. I currently looking for
            work as a software engineer.
          </v-card-text>
          <v-card-actions>
            <v-btn to="/AboutMe" color="primary" variant="outlined"
              >Education and More About Me!</v-btn
            >
            <v-btn
              color="primary"
              variant="outlined"
              href="https://github.com/JohanneJayde"
              target="_blank"
              >Github</v-btn
            >
            <v-btn
              color="primary"
              variant="outlined"
              href="https://www.linkedin.com/in/johannemcclenahan/"
              target="_blank"
              >LinkedIn</v-btn
            >
          </v-card-actions>
        </v-card>
        <Section title="Skills">
          <template #content>
            <v-row>
              <v-col cols="auto">
                <SkillCard title="Java" />
              </v-col>

              <v-col cols="auto">
                <SkillCard title="HTML" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="CSS" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="SQL" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="C#" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="Javascript" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="Vue.js" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="WordPress" />
              </v-col>
            </v-row>
          </template>
        </Section>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card
          v-for="(project, i) in projectContent"
          :key="i"
          :to="project._path"
          class="custom-color rounded-0"
          elevation="0"
        >
          <v-card-title class="font-weight-bold text-wrap mb-1">{{
            getTitle(project)
          }}</v-card-title>
          <v-card-text>{{ project.stinger }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/types";
import { format } from "date-fns";

const projectContent = await queryContent("/project/").find();

const getTitle = (project: ParsedContent) => {
  const formatStartDate = format(new Date(project.dates[0].start), "MMMM yyyy");
  const formatEndDate =
    project.dates[0].end == "Pressent" || !project.dates[0].end
      ? null
      : format(new Date(project.dates[0].end), "MMMM yyyy");
  const dateString = formatStartDate;

  if (project.dates[0].end === "Pressent") {
    return `${project.title} (${dateString} - Present)`;
  } else if (project.dates[0].end == null) {
    return `${project.title} (${dateString})`;
  }
  return `${project.title} (${dateString} - ${formatEndDate})`;
};
</script>

<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
