<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>
          These are some of the projects I have worked on. Click on a project to
          learn more.
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" v-for="(project, i) in projectContent" :key="i">
        <v-card elevation="3" class="pa-2 fill-height">
          <v-card-title class="font-weight-bold text-wrap">{{
            project.title
          }}</v-card-title>
          <v-card-text>{{ project.stinger }}</v-card-text>
          <v-card-item>
            <v-chip
              v-for="tech in project.techStack"
              :key="tech"
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
const projectContent = await queryContent("/project/").find();
</script>
