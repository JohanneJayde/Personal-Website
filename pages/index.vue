<template>
  <v-container>
    <v-card color="primary" class="rounded-xl pa-3">
      <v-card-title>About Me</v-card-title>
      <v-card-text>
        Hello, My name is Johanne McClenahan! I am currently a recent graduate
        from Eastern Washington University in June 2024. My major is Computer
        Science with a minor in Web Application Development. My hobbies include
        puzzles, hiking, and scootering.
      </v-card-text>
    </v-card>

    <Section title="Skills">
      <template #content>
        <v-row class="ga-3 justify-center ma-3">
          <SkillCard title="Java" />
          <SkillCard title="HTML" />
          <SkillCard title="CSS" />
          <SkillCard title="SQL" />
          <SkillCard title="C#" />
          <SkillCard title="Javascript" />
          <SkillCard title="Vue.js" />
        </v-row>
      </template>
    </Section>

    <Section title="Jobs">
      <template #content>
        <v-row>
          <v-col cols="6">
            <Card
              title="High School Tutor"
              subtitle="October 21st, 2018 to December 17th, 2018"
              body="Tutored Students who had trouble passing certain subjects for an hour for two days a week."
              color="primary"
            />
          </v-col>
          <v-col cols="6">
            <Card
              title="Engineering Intern, Electric (Utility) Department, City of Sitka"
              subtitle="July 16th, 2019 to Sept. 17th, 2019"
              body="Scanned, filed, and logged over 1425 Alaska Lumber and Pulp Company drawings with a value above $1,000,000. Worked with AutoCad to edit large-scale building schematics."
              color="primary"
            />
          </v-col>
          <v-col cols="6">
            <Card
              title="Building, Grounds, and Parks Supervisor Intern, Public Works Department, City of Sitka"
              subtitle="December 19th, 2019 to January 3rd, 2020"
              body="Revised painting maintenance history, and updated capital improvement plans for buildings that the public works services."
              color="primary"
            />
          </v-col>
          <v-col cols="6">
            <Card
              title="CSCD210 PLUS Group Leader, Eastern Washington University"
              subtitle="October 24th, 2022 to December 9th, 2023"
              body="Led a study group for CSCD210, which covers the basic concepts and applications of the Java programming language. Duties include preparing activies to help with competency in two fifty minute study sessions over the course, two times a week."
              color="primary"
            />
          </v-col>
        </v-row>
      </template>
    </Section>

    <Section title="Public Service">
      <template #content>
        <v-row>
          <v-col cols="6">
            <Card
              title="National Honors Society"
              subtitle="April, 23rd, 2018 – May 9th, 2019"
              body="Volunteered around the town of Sitka and raised money for charities through fundraising events, logged over 20 hours of service, and served as vice president of the NHS for my senior year of high school."
              color="primary"
            />
          </v-col>

          <v-col cols="6">
            <Card
              title="Eagle Up"
              subtitle="October 5th, 2019"
              body="Volunteered for three hours helping Transitions, a women’s shelter, by improving patients around the lawn and garden."
              color="primary"
            />
          </v-col>
          <v-col cols="6">
            <Card
              title="Associated Students of Eastern Washington University Technology Fee Committee Voting Member"
              subtitle="November 16th, 2022 - June 8th, 2023"
              body="Voted on issues pretaining to Eastern Washington Universtity’s technology fee that students pay each year such as where the money is spent and which amenities to keep or get rid of between years."
              color="primary"
            />
          </v-col>
        </v-row>
      </template>
    </Section>
  </v-container>
</template>
