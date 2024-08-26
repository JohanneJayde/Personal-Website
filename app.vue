<template>
  <v-app>
    <v-app-bar
      flat
      extension-height="40"
      class="app-bar-custom border-b-sm"
      density="compact"
    >
      <v-app-bar-title
        class="text-button"
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
      <v-btn class="custom-btn" to="/Projects"> Projects </v-btn>
      <v-btn class="custom-btn" to="/Employment"> Employment </v-btn>
      <v-btn class="custom-btn" to="/Engagement"> Public Service </v-btn>
      <template #extension v-if="onProjects">
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

    <v-main class="gradient-background">
      <NuxtPage />
    </v-main>

    <v-footer app class="app-footer-custom text-button border-b-sm">
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

const onProjects = ref<boolean>(false);

const returnHome = () => {
  router.push("/");
  onProjects.value = false;
};

watch(
  route,
  () => {
    if (route.path === "/projects" || route.path.match("/project/")) {
      onProjects.value = true;
    } else {
      onProjects.value = false;
    }
    console.log(route.path);
  },
  { immediate: true }
);
</script>

<style scoped>
.gradient-background {
  background-image: linear-gradient(to right bottom, #cda9fd, #dfd2fe, #f9f9f9);
  min-height: 100vh; /* Ensures the background covers the full height */
}

.app-bar-custom {
  background-color: rgba(255, 255, 255, 0.3) !important;
}

.app-footer-custom {
  background-color: rgba(255, 255, 255, 0.3) !important;
}
</style>
