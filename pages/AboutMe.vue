<template>
  <v-container>
    <v-img src="~/assets/photography.jpeg" height="400px" cover />
    <div class="text-body-1 mt-3">
      Hello, My name is Johanne McClenahan! I am a recent graduate from Eastern
      Washington University in June 2024. My major is Computer Science with a
      minor in Web Application Development. My hobbies include puzzles, hiking,
      and scootering. I hope to learn more and keep growing in the Computer
      Science field. I currently looking for work as a software engineer.
    </div>
    <Section title="Education & Accolades">
      <template #content>
        <v-row>
          <v-col cols="12">
            <Card
              title="Eastern Washington University, BS in Computer Science, GPA: 3.95"
              subtitle="2019-2024"
              body="Bachelor of Science in Computer Science with a minor in Web Application Development"
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Gonzaga Hackathon 1st Place"
              subtitle="November 1st, 2023 "
              body="Competed in the GU Hackathon in November 2023 for twelve hours among 120 other students. Led a team of four students in creating a web application. The project was a dashboard for viewing restaurant health inspections in the Spokane area."
              color="primary"
              :links="[
                {
                  text: 'Article',
                  href: 'https://www.gonzaga.edu/news-events/stories/2023/11/20/hackathon-2023',
                },
              ]"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Outstanding Senior Student"
              subtitle="June 2024"
              body="Awarded to the top student in the Computer Science Department at Eastern Washington University."
              color="primary"
            />
          </v-col>
        </v-row>
      </template>
    </Section>
  </v-container>
</template>
<style scoped>
.custom-color {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
