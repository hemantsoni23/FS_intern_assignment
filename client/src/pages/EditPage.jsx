import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ROUTE}/blogs/${id}`);
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_ROUTE}/blogs/${id}`, { title, content });
      alert("Blog updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Edit Blog
      </Typography>
      <form onSubmit={handleUpdate}>
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
          Update
        </Button>
      </form>
    </Box>
  );
};

export default EditPage;
