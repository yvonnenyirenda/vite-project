// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import { baseUrl } from "../../config";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = category
          ? `${baseUrl}/articles/category/${category}`
          : `${baseUrl}/articles`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase();
    return (
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.author.toLowerCase().includes(query)
    );
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard</h1>
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.selectBox}
        >
          <option value="">All Categories</option>
          <option value="Health">Health</option>
          <option value="Environment">Environment</option>
          <option value="Education">Education</option>
          <option value="Science">Science</option>
          <option value="Agriculture">Agriculture</option>
          <option value="others">Agriculture</option>
        </select>
      </div>

      <div style={styles.container}>
        <h1 style={styles.header}>Article Library</h1>
        <div>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} style={styles.articleCard}>
                <h3 style={styles.title}>{article.title}</h3>
                <p style={styles.details}>
                  By <strong>{article.author}</strong> | {article.date}
                </p>
                <p style={styles.meta}>
                  Location: {article.town}, Year: {article.year}
                </p>
                <span style={styles.category}>
                  Category: {article.category}
                </span>
              </div>
            ))
          ) : (
            <p style={styles.noResults}>No articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    fontSize: "2em",
    color: "#007BFF",
    marginBottom: "20px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1em",
    width: "60%",
  },
  selectBox: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1em",
  },
  articleCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  title: {
    fontSize: "1.5em",
    margin: "0 0 10px",
    color: "#333",
  },
  details: {
    fontSize: "0.9em",
    color: "#777",
    marginBottom: "10px",
  },
  meta: {
    fontSize: "0.85em",
    color: "#555",
  },
  category: {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "0.8em",
  },
  noResults: {
    textAlign: "center",
    color: "#888",
    fontSize: "1.2em",
  },
};

export default Dashboard;
