// src/components/ArticleList.js
import React, { useState } from 'react';

const articles = [
  { id: 1, title: 'Impact of Technology on Healthcare', author: 'Dr. John Doe', date: '2023-01-10', town: 'New York', year: 2023, category: 'Health' },
  { id: 2, title: 'Sustainable Energy Solutions for the Future', author: 'Jane Smith', date: '2022-11-15', town: 'San Francisco', year: 2022, category: 'Environment' },
  { id: 3, title: 'AI in Education: Prospects and Challenges', author: 'Alice Brown', date: '2023-03-22', town: 'Chicago', year: 2023, category: 'Education' },
  { id: 4, title: 'Advances in Machine Learning for Healthcare', author: 'Dr. Emily Clark', date: '2022-09-30', town: 'Boston', year: 2022, category: 'Health' },
  { id: 5, title: 'Exploring Space: The New Frontier', author: 'Michael Lee', date: '2023-04-05', town: 'Houston', year: 2023, category: 'Science' },
  { id: 6, title: 'Revolutionizing Agriculture with IoT', author: 'Laura Chen', date: '2023-02-28', town: 'Austin', year: 2023, category: 'Agriculture' },
];

const ArticleList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('title');

  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase();
    return (
      (!query || article[filterBy].toLowerCase().includes(query))
    );
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Article Library</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder={`Search by ${filterBy}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <select onChange={(e) => setFilterBy(e.target.value)} style={styles.selectBox}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button style={styles.searchButton}>Search</button>
      </div>
      <div>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} style={styles.articleCard}>
              <h3 style={styles.title}>{article.title}</h3>
              <p style={styles.details}>By <strong>{article.author}</strong> | {article.date}</p>
              <p style={styles.meta}>Location: {article.town}, Year: {article.year}</p>
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
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
    color: '#007BFF',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    gap: '10px',
  },
  searchInput: {
    width: '60%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
  selectBox: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  articleCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 10px',
    color: '#333',
  },
  details: {
    fontSize: '0.9em',
    color: '#777',
    marginBottom: '10px',
  },
  meta: {
    fontSize: '0.85em',
    color: '#555',
  },
  category: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '0.8em',
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    fontSize: '1.2em',
  },
};

export default ArticleList;
