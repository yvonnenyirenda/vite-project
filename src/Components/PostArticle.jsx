import React, { useState } from "react";
import { baseUrl } from "../../config";

const PostArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    date: "",
    town: "",
    year: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        setMessage(`Please fill in the ${key} field.`);
        return;
      }
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${baseUrl}/articles/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Article created successfully!");
        setFormData({
          title: "",
          content: "",
          category: "",
          author: "",
          date: "",
          town: "",
          year: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(`Failed to create article: ${errorData.error}`);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Post a New Article</h2>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />

        {/* Category dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select Category</option>
          <option value="Health">Health</option>
          <option value="Environment">Environment</option>
          <option value="Education">Education</option>
          <option value="Science">Science</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="town"
          placeholder="Town"
          value={formData.town}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className={`w-full py-2 rounded ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Article"}
        </button>
      </form>
    </div>
  );
};

export default PostArticle;
