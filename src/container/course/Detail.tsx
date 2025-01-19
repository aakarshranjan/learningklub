"use client";

import CollapsibleCard from "@/components/collapsibleCard/collapsibleCard";
import { CourseContent } from "@/types/CourseContent";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./Detail.module.scss";
import { useStickyContent } from "@/hooks/useStickyContent";
import { useState } from "react";

export default function CourseDetail({ data = [] }: { data: CourseContent[] }) {
  const { contentRef, isSticky } = useStickyContent();
  const [expandedContents, setExpandedContents] = useState<number[]>([]);

  const handleExpand = (id: number, mode: "expand" | "collapse") => {
    if (mode === "expand") {
      setExpandedContents([...expandedContents, id]);
    } else if (mode === "collapse") {
      setExpandedContents(expandedContents.filter((e) => e !== id));
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid size={8}>
        <Box className={styles.content}>
          <Typography variant="h4">Course content</Typography>
          <Button onClick={() => setExpandedContents(data.map((d) => d.id))}>
            Expand
          </Button>
          <Button onClick={() => setExpandedContents([])}>Collapse</Button>
          <Box>
            {data.map((d) => (
              <CollapsibleCard
                d={d}
                key={d.id}
                isExpanded={expandedContents.includes(d.id)}
                setIsExpanded={handleExpand}
              />
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid size={4}>
        <Box ref={contentRef}>
          <Box className={isSticky ? styles.sticky : styles.pricing}>
            <Typography variant="h5">
              Start with a demo class and continue afterwards
            </Typography>
            <Typography variant="h6"> &#8377; 3599</Typography>
            <Button>Submit a query</Button>
            <Button>Request a callback</Button>
            <Button>Enroll</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
