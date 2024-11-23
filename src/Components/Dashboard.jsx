// src/components/Dashboard.js
import React, { useState } from 'react';
import ArticleList from './ArticleList';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

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
        </select>
      </div>
      <ArticleList searchQuery={searchQuery} category={category} />
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
    color: '#007BFF',
    marginBottom: '20px',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1em',
    width: '60%',
  },
  selectBox: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
};

export default Dashboard;
