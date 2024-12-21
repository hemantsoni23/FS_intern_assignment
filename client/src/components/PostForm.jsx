import React from "react";
import { TextField, Button, Box } from "@mui/material";

function PostForm({ title, content, onSubmit, onChange }) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <TextField
        label="Title"
        name="title"
        value={title}
        onChange={onChange}
        fullWidth
        required
      />
      <TextField
        label="Content"
        name="content"
        value={content}
        onChange={onChange}
        fullWidth
        multiline
        rows={6}
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: "flex-end", backgroundColor: "#1565c0" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default PostForm;