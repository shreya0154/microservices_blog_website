

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  snippet?: string;
  topic?: string;
}

const topics = ["Mindfulness", "Productivity", "Creativity", "Science", "Philosophy"];

const ExplorePage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5005/post/getAllPosts");
        const postsWithSnippets = res.data.map((post: BlogPost) => ({
          ...post,
          snippet: post.content.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
        }));
        setPosts(postsWithSnippets);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      (p.topic || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-green-50">
        <h2 className="text-3xl font-bold mb-4 mt-4">Explore All Posts</h2>
        <input
          type="text"
          placeholder="Search by title, author, or topic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded mb-6"
        />

        <div className="flex flex-wrap gap-4 mb-6">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSearch(topic)}
              className="bg-green-200 px-4 py-1 rounded-full hover:bg-green-300"
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 rounded-xl shadow max-w-full overflow-hidden"
            >
              <h4 className="text-xl font-bold mb-2 break-words">{post.title}</h4>
              <p className="text-gray-600 mb-2 break-words line-clamp-3">
                {post.snippet}
              </p>
              <Link to={`/post/${post._id}`} className="text-green-700 hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExplorePage;














