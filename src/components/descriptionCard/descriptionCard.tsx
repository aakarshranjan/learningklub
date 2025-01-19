import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface OwnProps {
  title?: string;
  desc?: string;
}

function DescriptionCard({ title, desc }: OwnProps) {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DescriptionCard;
