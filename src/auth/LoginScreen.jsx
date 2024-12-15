import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userDetailsAtom, isAuthenticatedAtom } from "./atomsaut";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [, setUserDetails] = useRecoilState(userDetailsAtom);
  const [, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      const { token, userId } = response.data;

      setUserDetails({ userId, email: formData.email, token });
      setIsAuthenticated(true);
      alert("Login successful!");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid login attempt");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
