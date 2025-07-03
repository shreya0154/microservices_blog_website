

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5005"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userid",res.data.userId);
        localStorage.setItem("username",res.data.username);
        console.log(token);
        setError("");
        navigate("/dashboard");
      } else {
        setError("No token received");
      }
    } catch (err: any) {
      const backendMessage = err.response?.data?.message;
      if (backendMessage) {
        setError(backendMessage); 
        console.log('backend msg ', backendMessage)
      } else {
        setError("Login failed"); 
      }
      console.error("Login error:", backendMessage || err.message);
      // setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-lime-100 to-green-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-800">Welcome Back</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-700 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
