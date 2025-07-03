// // Component: Dashboard
// function Dashboard() {
//   const userPosts = mockPosts.filter(p => mockUser.posts.includes(p.id));
//   const savedPosts = mockPosts.filter(p => mockUser.savedPosts.includes(p.id));

//   return (
//     <div className="min-h-screen p-6">
//       <h2 className="text-3xl font-bold mb-4">Your Dashboard</h2>

//       <section className="mb-10">
//         <h3 className="text-2xl font-semibold mb-4">Your Posts</h3>
//         <div className="space-y-4">
//           {userPosts.map(post => (
//             <div key={post.id} className="border p-4 rounded">
//               <h4 className="text-xl font-bold">{post.title}</h4>
//               <Link to={`/post/${post.id}`} className="text-green-700">Read</Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <h3 className="text-2xl font-semibold mb-4">Saved Posts</h3>
//         <div className="space-y-4">
//           {savedPosts.map(post => (
//             <div key={post.id} className="border p-4 rounded">
//               <h4 className="text-xl font-bold">{post.title}</h4>
//               <Link to={`/post/${post.id}`} className="text-green-700">Read</Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


