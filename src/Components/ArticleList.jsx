// src/components/ArticleList.js
import React from "react";

const ArticleList = ({ articles, searchQuery }) => {
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
              <span style={styles.category}>Category: {article.category}</span>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No articles found.</p>
        )}
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
    marginBottom: "20px",
    color: "#007BFF",
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

export default ArticleList;
