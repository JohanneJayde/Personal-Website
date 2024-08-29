<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ data.title }}</h1>
      </v-col>
      <v-col>
        {{ data.description }}
      </v-col>
      <v-col cols="12">
        <h3 class="mb-2">Technologies Used:</h3>
        <v-row no-gutters>
          <v-col
            cols="auto"
            class="mr-2 mb-2"
            v-for="tech in data.techStack"
            :key="tech"
          >
            <v-chip color="primary">{{ tech }}</v-chip>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <h3>Features:</h3>
        <v-col v-for="feature in data.features" :key="feature">
          {{ feature }}
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="link in data.links" :key="link.href" cols="auto">
        <v-btn
          :href="link.href"
          target="_blank"
          color="primary"
          variant="outlined"
        >
          {{ link.text }}
        </v-btn>
      </v-col></v-row
    >
  </v-container>
</template>

<script setup lang="ts">
const router = useRoute();
const data = await queryContent("/project/" + router.params.slug).findOne();
</script>
