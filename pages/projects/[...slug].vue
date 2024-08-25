<template>
  <v-container>
    <h3>{{ data.title }}</h3>
    <h4>{{ data.description }}</h4>
    <h3>Technologies Used:</h3>
    <v-row no-gutters>
      <v-col
        cols="auto"
        class="mr-2"
        v-for="tech in data.techStack"
        :key="tech"
      >
        <v-chip>{{ tech }}</v-chip>
      </v-col>
    </v-row>
    <h3>Features:</h3>
    <v-col v-for="feature in data.features" :key="feature">
      {{ feature }}
    </v-col>

    <v-btn
      v-for="link in data.links"
      :key="link.href"
      :href="link.href"
      target="_blank"
    >
      {{ link.text }}
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
const router = useRoute();
const data = await queryContent("/projects/" + router.params.slug).findOne();
</script>
