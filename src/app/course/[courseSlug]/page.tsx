import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
import styles from "./page.module.scss";
import DescriptionCard from "@/components/descriptionCard/descriptionCard";
import { CourseContent } from "@/types/CourseContent";
import Grid from "@mui/material/Grid2";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Image from "next/image";
import CourseDetail from "@/container/course/Detail";
import { courseHighlightLabels } from "@/utils/Constants";

const data: CourseContent[] = [
  {
    id: 1,
    name: "HTML",
    subSection: [
      { id: 12, name: "Intro to HTML" },
      { id: 13, name: "Different tags in HTML" },
      { id: 14, name: "Intro to HTML" },
      { id: 15, name: "Different tags in HTML" },
    ],
  },
  {
    id: 2,
    name: "Style up - CSS",
    subSection: [
      { id: 16, name: "Intro to CSS" },
      { id: 17, name: "Different properties in CSS" },
      { id: 18, name: "Intro to CSS" },
      { id: 19, name: "Different properties in CSS" },
      { id: 20, name: "Intro to CSS" },
      { id: 21, name: "Different properties in CSS" },
    ],
  },
  {
    id: 3,
    name: "JavaScript Fundamentals",
    subSection: [
      { id: 22, name: "Intro to JS" },
      { id: 23, name: "Datatypes in JS" },
      { id: 24, name: "Intro to JS" },
      { id: 25, name: "Datatypes in JS" },
      { id: 26, name: "Intro to JS" },
      { id: 27, name: "Datatypes in JS" },
      { id: 28, name: "Intro to JS" },
      { id: 29, name: "Datatypes in JS" },
    ],
  },
  {
    id: 4,
    name: "JavaScript Advanced",
    subSection: [
      { id: 30, name: "Intro to JS" },
      { id: 31, name: "Datatypes in JS" },
      { id: 32, name: "Intro to JS" },
      { id: 33, name: "Datatypes in JS" },
      { id: 34, name: "Intro to JS" },
      { id: 35, name: "Datatypes in JS" },
      { id: 36, name: "Intro to JS" },
      { id: 37, name: "Datatypes in JS" },
    ],
  },
];

const highlights: { key: string; value: string }[] = [
  {
    key: "level",
    value: "Beginner Level",
  },
  {
    key: "time",
    value: "2 months",
  },
  {
    key: "courses",
    value: "HTML, CSS, JavaScript, Node JS, SQL",
  },
  {
    key: "test",
    value: "test",
  },
];

const courseAdv = [
  "The ins and outs of HTML5, CSS3, and Modern JavaScript",
  "Create responsive, accessible, and beautiful layouts",
  "Use CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma",
  "Use JavaScript variables, conditionals, loops, functions, arrays, and objects",
  "Use Express and MongoDB to create full-stack JS applications",
  "Write Javascript functions, and understand scope and higher order functions",
  "Use common JS data structures like Arrays and Objects",
];

export default async function Course({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const cs = (await params).courseSlug;
  return (
    <main>
      <div>Some course</div>
      <p>{cs}</p>
      <Box className={styles.container}>
        <Typography className={styles.heading} variant="h3" gutterBottom>
          Web Development
        </Typography>
        <div className={styles.extraYSpace} />
        <Typography className={styles.desc} variant="subtitle1" gutterBottom>
          Get Industry level technical expertise in the web development domain.
          You will learn most of the essential skills needed to perform your job
          as a Web Developer. This is a beginner level course and no prior
          expretise is needed to get started.
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "white" }}
              />
            }
            spacing={{ xs: 1, sm: 2, md: 4 }}
            className={styles.stack}
          >
            <Typography variant="subtitle2">
              Next batch starts in - May
            </Typography>
            <Button>Enroll</Button>
            <Button>Need help?</Button>
          </Stack>
        </div>
        <Box className={`${styles.flex} ${styles.stack}`}>
          {highlights.map((h, index) => (
            <Box key={h.key} className={styles.flex}>
              <DescriptionCard
                title={h.value}
                desc={
                  courseHighlightLabels[
                    h.key as keyof typeof courseHighlightLabels
                  ]
                }
              />
              {index !== highlights.length - 1 ? (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "white", marginX: "2vh" }}
                />
              ) : null}
            </Box>
          ))}
        </Box>
      </Box>
      <div className={styles.extraYSpace} />
      <Box className={styles.detail}>
        <Box>
          <Typography variant="h4">Advantages/ What you will learn</Typography>
          <Box>
            <Grid container spacing={2}>
              {courseAdv.map((adv, index) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
                  <Box className={styles.flex}>
                    <DoneOutlineIcon color="success" />
                    <Box>{adv}</Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <div className={styles.extraYSpace} />
        <Box className={styles.longDescContainer}>
          <Typography variant="h4">Course description</Typography>
          <Grid container spacing={10}>
            <Grid size={7}>
              <Box>
                Understanding the progressive web apps platform, including its
                advantages, challenges, and differences with other app
                development approaches, can be confusing. Creating a good user
                experience for installation and usage is key for success, and to
                achieve that you need to understand a lot of concepts before
                starting the project. In this course, Progressive Web Apps: The
                Big Picture, you will gain the ability to understand the PWA
                platform before starting your next project. First, you will
                learn the differences compared to other app development
                approaches. Next, you will discover the main components,
                including the service worker, and how to get the installed app
                experience on desktop, Android, iOS, and iPadOS. Finally, you
                will explore how to start a PWA project and how to distribute
                the app from the browser or stores, including end-user and
                enterprise deployments. When you are finished with this course,
                you will have the skills and knowledge of progressive web apps
                needed to start a project for a new app or to upgrade your
                current apps.
              </Box>
            </Grid>
            <Grid size={5}>
              <Image
                src="https://miro.medium.com/v2/resize:fit:1400/1*fHrAZJ1_L0Ff9dvVexL5_A.png"
                alt="er"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "80%",
                }}
                width={300}
                height={200}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CourseDetail data={data} />
    </main>
  );
}

/*
[
    { id: 1, name: 'HTML', subSections: [{ id: 12, sectionId: 1, name: 'Intro to HTML' }, { id: 13, sectionId: 1, name: 'Different tags in HTML' }] },
    { id: 2, name: 'Style up - CSS', subSections: [{ id: 16, sectionId: 2, name: 'Intro to CSS' }, { id: 17, sectionId: 2, name: 'Different properties in CSS' }] },
    { id: 3, name: 'JavaScript Fundamentals', subSections: [{ id: 22, sectionId: 3, name: 'Intro to JS' }, { id: 23, sectionId: 3, name: 'Datatypes in JS' }] }
  ]
*/
