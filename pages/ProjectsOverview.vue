<template>
  <h3>Projects Page</h3>
  <v-row>
    <v-col cols="12" lg="12" v-for="(project, i) in projectContent" :key="i">
      <Card
        :title="project.title!"
        :subtitle="project.date!"
        :body="project.stinger!"
        color="primary"
        :links="project.links!"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const projectContent = await queryContent("/projects/").find();
</script>
