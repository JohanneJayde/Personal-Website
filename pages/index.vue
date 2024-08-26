<template>
  <v-container>
    <v-card color="primary" class="rounded-xl pa-3">
      <v-card-title>About Me</v-card-title>
      <v-card-text class="text-body-1">
        Hello, My name is Johanne McClenahan! I am currently a recent graduate
        from Eastern Washington University in June 2024. My major is Computer
        Science with a minor in Web Application Development. My hobbies include
        puzzles, hiking, and scootering. I hope to learn more and keep growing
        in the Computer Science field. I currently work look for work as a
        software engineer.
      </v-card-text>
    </v-card>
    <v-row>
      <v-col cols="12" lg="6">
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
      </v-col>
      <v-col cols="12" lg="6">
        <Section title="Skills">
          <template #content>
            <v-row class="justify-center">
              <v-col cols="auto">
                <SkillCard title="Java" />
              </v-col>

              <v-col cols="auto">
                <SkillCard title="HTML" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="CSS" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="SQL" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="C#" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="Javascript" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="Vue.js" />
              </v-col>
              <v-col cols="auto">
                <SkillCard title="WordPress" />
              </v-col>
            </v-row>
            <v-card
              to="/projects"
              color="section"
              class="pa-1 text-center my-4 rounded-xl"
            >
              <v-card-title>Projects</v-card-title>
            </v-card>
            <v-card
              to="/employment"
              color="section"
              class="pa-1 text-center my-4 rounded-xl"
            >
              <v-card-title>Employment</v-card-title>
            </v-card>
            <v-card
              to="/engagement"
              color="section"
              class="pa-1 text-center my-4 rounded-xl"
            >
              <v-card-title>Engagement</v-card-title>
            </v-card>
          </template>
        </Section>
      </v-col>
    </v-row>
  </v-container>
</template>
