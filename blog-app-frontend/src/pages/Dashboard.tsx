


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import ProtectedNavbar from "../components/ProtectedNavbar";
import axios from "axios";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


const API = "http://localhost:5005";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });

  const token = localStorage.getItem("token");
  // const userid = localStorage.getItem("userid");
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${API}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);

        const postRes = await axios.get(`${API}/post/getAllPosts`);
        setArticles(postRes.data);
      } catch (err) {
        console.error("Failed to fetch user data", err);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [token, navigate]);

  const postedArticles = articles.filter((a) => a.authorid === user?._id);
  const savedArticles = articles.filter((a) => user?.savedArticles?.includes(a._id));

  const handleCreatePost = async () => {
    try {
      await axios.post(
        `${API}/post/createPost`,
        {
          title: newArticle.title,
          content: newArticle.content,
          authorid: user._id,
          author: user.username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log('post created successfully')
      alert('post created successfully')
      setShowModal(false);
      setNewArticle({ title: "", content: "" });
      const updatedPosts = await axios.get(`${API}/post/getAllPosts`);
      setArticles(updatedPosts.data);
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };


  const editor = useEditor({
  extensions: [StarterKit],
  content: newArticle.content,
  onUpdate: ({ editor }) => {
    setNewArticle((prev) => ({ ...prev, content: editor.getHTML() }));
  },
});


  if (!user) return null;

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      
      <ProtectedNavbar/>
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 mb-4"></div>
          <h2 className="text-xl font-semibold mb-1">{user.username}</h2>
          <p className="text-gray-600 text-sm mb-4">{user.country || "No country set"}</p>
          <div className="w-full text-left bg-green-100 p-4 rounded-xl text-black space-y-3">
            <button className="block w-full text-left font-medium hover:underline">Edit Profile</button>
            <button className="block w-full text-left font-medium hover:underline">Change Password</button>
            <button onClick={() => setShowModal(true)} className="block w-full text-left font-medium hover:underline">Post Article</button>
          </div>
        </aside>

        <main className="md:col-span-3 flex flex-col gap-10">
          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Articles Posted By You</h3>
            {postedArticles.length > 0 ? (
              <>
                <div className="flex space-x-4 overflow-x-auto scrollbar-thin">
                  {postedArticles.slice(0, 5).map((article) => (
                    <div key={article._id} className="min-w-[240px] bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
                      <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                      <Link to={`/post/${article._id}`} className="text-green-700 hover:underline">Read</Link>
                    </div>
                  ))}
                </div>
                {postedArticles.length > 5 && (
                  <div className="mt-4 text-right">
                    <Link to="/my-articles" className="text-green-700 font-medium hover:underline">View All →</Link>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-500 text-lg font-medium">
                No articles posted yet... <button onClick={() => setShowModal(true)} className="mt-5 block w-full text-left text-blue-500 font-medium hover:underline">Create One</button>
              </p>
            )}
          </section>

          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Saved Articles</h3>
            {savedArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedArticles.map((article) => (
                  <div key={article._id} className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
                    <h4 className="font-semibold text-lg mb-1">{article.title}</h4>
                    <p className="text-sm text-gray-500 mb-1">By {article.author}</p>
                    <Link to={`/post/${article._id}`} className="text-green-700 hover:underline">Read</Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-lg font-medium">Save your favourite articles here.</p>
            )}
          </section>
        </main>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-xl relative">
            <h2 className="text-2xl font-bold mb-4">Create New Article</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded mb-4"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            />

            
            {/* <ReactQuill
              theme="snow"
              value={newArticle.content}
              onChange={(content) => setNewArticle({ ...newArticle, content })}
              className="mb-4 h-60"
            /> */}

            <div className="border rounded mb-4 p-2 h-60 overflow-y-auto">
              <EditorContent editor={editor} />
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
              <button onClick={handleCreatePost} className="px-4 py-2 bg-green-600 text-white rounded">Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;