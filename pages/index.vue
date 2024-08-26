<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6">
        <v-col>
          <v-img
            src="~/assets/photography.jpeg"
            height="300px"
            width="100%"
            cover
          />
        </v-col>
        <v-col>
          <span class="text-body-1 my-3">
            Hello, My name is Johanne McClenahan! I am a recent graduate from
            Eastern Washington University in June 2024. My major is Computer
            Science with a minor in Web Application Development. My hobbies
            include puzzles, hiking, and scootering. I hope to learn more and
            keep growing in the Computer Science field. I currently looking for
            work as a software engineer.
          </span>
        </v-col>
        <v-col>
          <v-row dense>
            <v-col cols="auto">
              <v-btn to="/AboutMe" variant="outlined"
                >Education and More About Me!</v-btn
              >
            </v-col>
            <v-col cols="auto">
              <v-btn
                variant="outlined"
                href="https://github.com/JohanneJayde"
                target="_blank"
                >Github</v-btn
              >
            </v-col>
            <v-col cols="auto">
              <v-btn
                variant="outlined"
                href="https://www.linkedin.com/in/johannemcclenahan/"
                target="_blank"
                >LinkedIn</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <Section title="Skills">
          <template #content>
            <v-row dense>
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
                <SkillCard title="ASP.NET" />
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
      <v-col cols="12" lg="6" class="d-flex flex-column">
        <v-card
          v-for="(project, i) in projectContent.sort((a, b) =>
            a.dates[0].start < b.dates[0].start ? 1 : -1
          )"
          :key="i"
          :to="project._path"
          class="rounded-0"
          elevation="0"
          color="transparent"
          style="border-bottom: 2px solid rgba(0, 0, 0, 0.12)"
        >
          <v-card-title class="font-weight-bold text-wrap mb-1"
            >{{ project.title }} ({{ getDates(project) }})</v-card-title
          >
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
