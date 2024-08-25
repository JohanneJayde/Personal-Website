<template>
  <v-app>
    <v-app-bar flat color="primary" extension-height="40">
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
      <v-btn value="project" @click="toProjects"> Projects </v-btn>
      <template #extension v-if="viewMode">
        <v-slide-group class="fill-height">
          <v-slide-group-item>
            <v-btn
              class="bg-primary rounded-0"
              height="40"
              size="small"
              style="border-right: 1px solid white"
              v-for="project in projectContent"
              :key="project.title"
              :to="project._path"
            >
              {{ project.title }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
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

const projectContent = await queryContent("/project/").find();

const viewMode = ref<string | null>(null);

const router = useRouter();
const route = useRoute();
const returnHome = () => {
  router.push("/");
  viewMode.value = null;
};

const toProjects = () => {
  router.push("/projects");
  viewMode.value = "project";
};

watch(route, () => {
  if (route.path === "/projects" || route.path.match("/project/")) {
    viewMode.value = "project";
  } else {
    viewMode.value = null;
  }
});

onMounted(() => {
  if (route.path === "/projects" || route.path.match("/project/")) {
    viewMode.value = "project";
  }
});
</script>

<style scropped>
.styled-group {
  margin: 0;
}
</style>
