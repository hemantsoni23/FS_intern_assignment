import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_AI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_ROUTE}/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  // Generate summary using Google Generative AI
  const generateSummary = async () => {
    if (!blog?.content) return;
    setIsSummarizing(true);
    try {
      const prompt = `Summarize this - ${blog.content}`;
      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();
      setSummary(responseText);
    } catch (error) {
      console.error("Error generating summary:", error);
      setSummary("Error generating summary. Please try again.");
    } finally {
      setIsSummarizing(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <Box p={3} sx={{ backgroundColor: "#121212", minHeight: "100vh", color: "#e0e0e0" }}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : blog ? (
        <>
          <Typography variant="h4" mb={2} sx={{ fontWeight: "bold", color: "#ffffff" }}>
            {blog.title}
          </Typography>
          <Typography sx={{ color: "#b0bec5", lineHeight: "1.6" }}>{blog.content}</Typography>
          {summary && (
            <Box mt={3} p={2} sx={{ backgroundColor: "#1e1e1e", borderRadius: "8px", color: "#ffffff" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Summary:
              </Typography>
              <Typography>{summary}</Typography>
            </Box>
          )}
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={generateSummary}
              disabled={isSummarizing}
              sx={{ marginRight: "0.5rem", backgroundColor: "#0288d1", "&:hover": { backgroundColor: "#03a9f4" } }}
            >
              {isSummarizing ? "Summarizing..." : "Generate Summary"}
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained">Back to Home</Button>
            </Link>
          </Box>
        </>
      ) : (
        <Typography variant="h6">Blog not found.</Typography>
      )}
    </Box>
  );
};

export default BlogPage;
