<template>
  <v-container>
    <v-col>
      <h1>{{ data.title }}</h1>
    </v-col>
    <v-col>
      {{ data.description }}
    </v-col>
    <v-col>
      <v-sheet class="pa-2">
        <h3 class="mb-2">Technologies Used:</h3>
        <v-row no-gutters>
          <v-col
            cols="auto"
            class="mr-2 mb-2"
            v-for="tech in data.techStack"
            :key="tech"
          >
            <v-chip>{{ tech }}</v-chip>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col>
      <h3>Features:</h3>
      <v-col v-for="feature in data.features" :key="feature">
        {{ feature }}
      </v-col>
    </v-col>
    <v-col>
      <v-btn
        v-for="link in data.links"
        :key="link.href"
        :href="link.href"
        target="_blank"
      >
        {{ link.text }}
      </v-btn>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
const router = useRoute();
const data = await queryContent("/project/" + router.params.slug).findOne();
</script>
