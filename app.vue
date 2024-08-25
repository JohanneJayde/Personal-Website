<template>
  <v-app>
    <v-app-bar flat color="primary">
      <v-app-bar-title
        class="font-weight-bold"
        @click="returnHome"
        style="cursor: pointer"
      >
        Johanne McClenahan
      </v-app-bar-title>
      <v-spacer />
      <v-btn href="https://github.com/JohanneJayde" target="_blank"
        >Github</v-btn
      >
      <v-btn
        href="https://www.linkedin.com/in/johannemcclenahan/"
        target="_blank"
        >LinkedIn</v-btn
      >
      <v-btn value="projects" @click="toProjects"> Projects </v-btn>
      <template #extension v-if="viewMode">
        <v-btn-toggle>
          <v-btn
            class="bg-primary rounded-0"
            style="border-right: 1px solid white"
            color="primary"
            size="small"
            v-for="project in projectContent"
            :key="project.title"
            :to="project._path"
          >
            {{ project.title }}
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer app color="primary">
      <span>&copy; {{ new Date().getFullYear() }} Johanne McClenahan</span>
      <v-spacer />
      <span>Contact: johanne.jayde@gmail.com</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  title: "Johanne McClenahan",
  meta: [
    {
      name: "description",
      content: "Johanne McClenahan Portfolio",
    },
  ],
});

const projectContent = await queryContent("/projects/").find();

const viewMode = ref<string | null>(null);

const router = useRouter();
const route = useRoute();
const returnHome = () => {
  router.push("/");
  viewMode.value = null;
};

const toProjects = () => {
  router.push("/projectsoverview");
  viewMode.value = "projects";
};

onMounted(() => {
  if (route.path === "/projectsoverview" || route.path.match("/projects/")) {
    viewMode.value = "projects";
  }
});
</script>
