export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Smartphones in 2025",
      desc: "Discover the latest flagship phones and which one is right for you.",
    },
    {
      id: 2,
      title: "Why Choose OLED Displays?",
      desc: "OLED technology explained – brighter, sharper, and better for your eyes.",
    },
    {
      id: 3,
      title: "Laptop Buying Guide",
      desc: "Everything you need to know before buying your next laptop.",
    },
  ];

  return (
    <div className="min-h-[100vh] bg-white px-6 py-10">
      <h1 className="text-3xl text-black font-bold mb-6">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#F6F6F6] shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.desc}</p>
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}