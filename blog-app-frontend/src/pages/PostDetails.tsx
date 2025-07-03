


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProtectedNavbar from "../components/ProtectedNavbar";

const API = "http://localhost:5005";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${API}/post/getPost/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!post) return <div className="p-10">Post not found</div>;

  return (
    <>
      {localStorage.userid ? <ProtectedNavbar/>:<Navbar />}
      <div className="min-h-screen p-10 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">By <span className="font-semibold">{post.author}</span></p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}










// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useNavigate,
//   useParams
// } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// // Dummy Data and Types
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

// // const mockUser: User = {
// //   id: 1,
// //   name: "Shreya",
// //   savedPosts: [1],
// //   posts: [1, 2]
// // };



// export default function PostDetail() {
//   const { id } = useParams();
//   const post = mockPosts.find(p => p.id === Number(id));
//   if (!post) return <div className="p-6">Post not found</div>;

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen p-10 bg-white">
      
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
//         <p className="text-sm text-gray-500 mb-4">by {post.author} · Topic: {post.topic}</p>
//         <p className="text-lg">{post.content}</p>
//       </div>
     
//     </div>
//  <Footer/>
//     </>
//   );
// }



