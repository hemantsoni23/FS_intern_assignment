import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

function PostCard({ id, title, summary }) {
  return (
    <Card elevation={3} sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={Link}
          to={`/post/${id}`}
          sx={{ color: "#1565c0" }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;