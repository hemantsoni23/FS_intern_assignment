import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import axios from "axios";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_ROUTE}/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_ROUTE}/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Box p={3} sx={{ backgroundColor: "#121212", minHeight: "100vh", color: "#e0e0e0" }}>
      <Typography variant="h4" mb={3} sx={{ fontWeight: "bold" }}>
        All Blogs
      </Typography>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        blogs.map((blog) => (
          <Box
            key={blog._id}
            mb={3}
            p={2}
            sx={{
              backgroundColor: "#1e1e1e",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "#2e2e2e" },
            }}
          >
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              {blog.title}
            </Typography>
            <Typography sx={{ color: "#b0bec5" }}>{blog.summary}</Typography>
            <Box mt={2}>
              <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ marginRight: "0.5rem" }}>
                  View
                </Button>
              </Link>
              <Link to={`/edit/${blog._id}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ marginRight: "0.5rem", backgroundColor: "#0288d1", "&:hover": { backgroundColor: "#03a9f4" } }}>
                  Edit
                </Button>
              </Link>
              <Button variant="contained" color="error" onClick={() => deleteBlog(blog._id)}>
                Delete
              </Button>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default HomePage;
