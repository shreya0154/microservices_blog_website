

import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ExplorePage from "./pages/ExplorePage";
import PostDetail from "./pages/PostDetails";


// interface BlogPost {
//   id: number;
//   title: string;
//   snippet: string;
//   content: string;
//   topic: string;
//   author: string;
// }

// interface User {
//   id: number;
//   name: string;
//   savedPosts: number[];
//   posts: number[];
// }

// const topics = ["Mindfulness", "Productivity", "Creativity", "Science", "Philosophy"];

// const mockPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "How Minimalism Can Improve Focus",
//     snippet: "Reducing distractions in life creates mental space for deep thinking.",
//     content: "Full article about minimalism...",
//     topic: "Mindfulness",
//     author: "Shreya"
//   },
//   {
//     id: 2,
//     title: "The Science of Learning",
//     snippet: "Psychology behind how we absorb and recall information.",
//     content: "Full article on science of learning...",
//     topic: "Science",
//     author: "Shreya"
//   }
// ];

// const mockUser: User = {
//   id: 1,
//   name: "Shreya",
//   savedPosts: [1],
//   posts: [1, 2]
// };



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
