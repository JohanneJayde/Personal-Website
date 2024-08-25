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
          </template>
        </Section>
      </v-col>
    </v-row>
    <v-card to="/projectsoverview">
      <v-card-title>Projects</v-card-title>
    </v-card>
    <Section title="Jobs">
      <template #content>
        <v-row>
          <v-col cols="12" lg="6">
            <Card
              title="Associate Software Engineer, IntelliTect"
              subtitle="Intern (4/24 - 6/24) Associate (6/24 to 8/24)"
              body="Worked a team to help improve internal project management site for company. Worked with Github to do code reviews and merging updates into the main production site. Project used ASP.NET, Vue.js, and Coalesce Framework."
              color="primary"
            />
          </v-col>

          <v-col cols="12" lg="6">
            <Card
              title="Instructional Technology Web Editor, Eastern Washington University"
              subtitle="12/23 to 6/24"
              body="Work with Instructional Technology to help maintain EWU’s inside.ewu.edu domain sites using WordPress. Currently going through old sites and helping update to be consistent with new EWU branding. Example sites: ASEWU, Writers’ Center, Global Academic Programs."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Eagle Adventure App Developer, Eastern Washington University"
              subtitle="6/23 to 8/23"
              body="Worked with Intern Vice Provost to develop Quest app for EWU Summer Bridge program. Developed the application using C# and Unity to work on IOS and Android devices."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Computer Science Teacher’s Assistant, Eastern Washington University"
              subtitle="4/23 to 6/24"
              body="Graded and provided feedback for homework and lab assignments. TA for Java foundations, Introduction to Database, Data Mining, and Advanced Database Management Systems. Met with students outside of class who were struggling with course content."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="CSCD210 PLUS Group Leader, Eastern Washington University"
              subtitle="October 24th, 2022 to December 9th, 2023"
              body="Led a study group for CSCD210, which covers the basic concepts and applications of the Java programming language. Duties include preparing activies to help with competency in two fifty minute study sessions over the course, two times a week."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Associated Press Election Vote Entry Operator"
              subtitle="October 8th, 2022 to November 8th, 2022"
              body="Worked with Associated Press Election by helping with entering state ballots to help keep their results up to date to be used by news outlets."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Building, Grounds, and Parks Supervisor Intern, Public Works Department, City of Sitka"
              subtitle="December 19th, 2019 to January 3rd, 2020"
              body="Revised painting maintenance history, and updated capital improvement plans for buildings that the public works services."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Engineering Intern, Electric (Utility) Department, City of Sitka"
              subtitle="July 16th, 2019 to Sept. 17th, 2019"
              body="Scanned, filed, and logged over 1425 Alaska Lumber and Pulp Company drawings with a value above $1,000,000. Worked with AutoCad to edit large-scale building schematics."
              color="primary"
            />
          </v-col>

          <v-col cols="12" lg="6">
            <Card
              title="High School Tutor"
              subtitle="October 21st, 2018 to December 17th, 2018"
              body="Tutored Students who had trouble passing certain subjects for an hour for two days a week."
              color="primary"
            />
          </v-col>
        </v-row>
      </template>
    </Section>
    <Section title="Public Service">
      <template #content>
        <v-row>
          <v-col cols="12" lg="6">
            <Card
              title="President - Association For Computer Machinery EWU Chapter"
              subtitle="December 15th, 2023 - Present"
              body="Currently president of EWU’s chapter of ACM. I work with other officers to help plan events and get more engagement for Computer Science at EWU. In charge of planning EWU’s first Hackathon, Codefest 2024, slated for April 2024"
              color="primary"
              :links="[
                {
                  text: 'Codefest 2024',
                  href: 'https://inside.ewu.edu/csacm/ewu-codefest-2024/',
                },
              ]"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Volunteer - GenCyber Camp 2023"
              subtitle="July 23rd, 2023 - July 27th, 2023"
              body="Helped at Eastern Washington University's GenCyber Camp. GenCyber is a series of camps held around the country to help provide opportunities for students to learn about Cybersecurity. Helped high schoolers with various activites including learning basic linux, basic networking, and CTFs."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Treasurer - Asian Student Association"
              subtitle="February 23rd, 2023 - April 10th, 2024"
              body="Served as the first treasurer for the Asian Student Association, managing financials and budget. The ASA Spring Market is a yearly event that we put on to bring awareness of Asian culture to the greater EWU population."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Associated Students of Eastern Washington University Technology Fee Committee Voting Member"
              subtitle="November 16th, 2022 - June 8th, 2023"
              body="Voted on issues pretaining to Eastern Washington Universtity’s technology fee that students pay each year such as where the money is spent and which amenities to keep or get rid of between years."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="Eagle Up"
              subtitle="October 5th, 2019"
              body="Volunteered for three hours helping Transitions, a women’s shelter, by improving patients around the lawn and garden."
              color="primary"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Card
              title="National Honors Society"
              subtitle="April, 23rd, 2018 – May 9th, 2019"
              body="Volunteered around the town of Sitka and raised money for charities through fundraising events, logged over 20 hours of service, and served as vice president of the NHS for my senior year of high school."
              color="primary"
            />
          </v-col>
        </v-row>
      </template>
    </Section>
  </v-container>
</template>

<script setup lang="ts">
const projectContent = await queryContent("/projects/").find();
</script>
