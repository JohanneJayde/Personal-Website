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
      <v-btn to="/Projects"> Projects </v-btn>
      <v-btn to="/Employment"> Employment </v-btn>
      <v-btn to="/Engagement"> Public Service </v-btn>
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

<style scropped>
.styled-group {
  margin: 0;
}
</style>
