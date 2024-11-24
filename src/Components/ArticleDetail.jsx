import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`${baseUrl}/articles/${id}`);
      setArticle(response.data);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  const deleteArticle = async () => {
    try {
      await axios.delete(`${baseUrl}/articles/${id}`);
      alert("Article deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  if (!article) return <p>Loading...</p>;

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.category}</p>
      <p className="mb-4">{article.content}</p>
      <button
        onClick={deleteArticle}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete Article
      </button>
    </div>
  );
}

export default ArticleDetail;
