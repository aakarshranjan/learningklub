"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./collapsibleCard.module.scss";
import { CourseContent } from "@/types/CourseContent";

export default function CollapsibleCard({
  d,
  isExpanded = false,
  setIsExpanded,
}: {
  d: CourseContent;
  isExpanded: boolean;
  setIsExpanded: (id: number, mode: "collapse" | "expand") => void;
}) {
  return (
    <Box key={d.id}>
      <Box className={styles.flex}>
        {isExpanded ? (
          <ArrowDropUpIcon
            color="error"
            onClick={() => setIsExpanded(d.id, "collapse")}
          />
        ) : (
          <ArrowDropDownIcon
            color="error"
            onClick={() => setIsExpanded(d.id, "expand")}
          />
        )}
        <Typography variant="subtitle1">{d.name}</Typography>
      </Box>
      {isExpanded ? (
        <Box>
          {d.subSection.map((sec) => (
            <Box key={sec.id} className={styles.subSection}>
              {sec.name}
            </Box>
          ))}
        </Box>
      ) : null}

      <Divider
        orientation="horizontal"
        sx={{ borderColor: "white", width: "50%" }}
      />
    </Box>
  );
}
