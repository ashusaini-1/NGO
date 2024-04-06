
const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Art of Writing",
      author: "John Doe",
      date: "March 27, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      id: 2,
      title: "React Hooks: A Beginner's Guide",
      author: "Jane Smith",
      date: "March 26, 2024",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
    },
    // Add more posts if needed
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow rounded-md overflow-hidden"
            >
              <img
                src="https://source.unsplash.com/random"
                alt="Blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">
                  {post.author} - {post.date}
                </p>
                <p className="text-gray-800">{post.content}</p>
                {/* Add read more link or button if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
