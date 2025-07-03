

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const API = "http://localhost:5005";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
}

export default function LandingPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API}/post/getAllPosts`);
        setPosts(res.data.reverse()); // latest first
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-lime-200 text-gray-800">
        <section className="text-center px-6 py-20">
          <h2 className="text-5xl font-bold mb-6">Ideas take root here</h2>
          <p className="text-xl mb-8">Cultivate your curiosity in a vibrant ecosystem of thought.</p>
          <Link to="/explore" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
            Explore More
          </Link>
        </section>

        <section className="px-6 py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Trending Posts</h3>
          {loading ? (
            <p className="text-center text-gray-600">Loading posts...</p>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 6).map(post => (
                <div key={post._id} className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                  <p
                    className="text-gray-600 mb-2 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></p>
                  <Link to={`/post/${post._id}`} className="text-green-700 hover:underline">Read more →</Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No posts available.</p>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
