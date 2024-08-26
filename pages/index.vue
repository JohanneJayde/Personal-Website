<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6">
        <v-card
          v-for="(project, i) in projectContent"
          :key="i"
          :to="project._path"
          class="custom-color rounded-0"
          elevation="0"
        >
          <v-card-title class="font-weight-bold text-wrap mb-1"
            >{{ project.title }} | {{ project.date }}</v-card-title
          >
          <v-card-text>{{ project.stinger }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="6">
        <v-card class="pa-3 custom-color">
          <v-card-title>About Me</v-card-title>
          <v-card-text class="text-body-1">
            Hello, My name is Johanne McClenahan! I am a recent graduate from
            Eastern Washington University in June 2024. My major is Computer
            Science with a minor in Web Application Development. My hobbies
            include puzzles, hiking, and scootering. I hope to learn more and
            keep growing in the Computer Science field. I currently work look
            for work as a software engineer.
          </v-card-text>
        </v-card>
        <Section title="Skills">
          <template #content>
            <v-row class="justify-center">
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
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const projectContent = await queryContent("/project/").find();
</script>

<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
