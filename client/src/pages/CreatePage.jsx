import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_ROUTE}/blogs`, { title, content });
      setTitle("");
      setContent("");
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Create a New Blog
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreatePage;
