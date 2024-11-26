import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import Trending from "../components/Trending";

const blogs = [
  {
    id: "1",
    image: "/images/blog1.jpg",
    category: "Professional Development",
    title: "4 Reasons Every Professional Needs a Call Recording App in 2022",
    description:
      "Discover why call recording apps are essential for professionals in today’s business world.",
    link: "/blogs/1",
  },
  {
    id: "2",
    image: "/images/blog2.jpg",
    category: "Productivity",
    title:
      "Recording Business Calls: How to Stay Productive When Working From Home",
    description:
      "Learn tips for using call recording apps to boost productivity while working remotely.",
    link: "/blogs/2",
  },
  {
    id: "3",
    image: "/images/blog3.jpg",
    category: "Research",
    title: "The 6 Phone Conversations You’ll Be Glad You Recorded",
    description:
      "Discover the importance of recording phone conversations in various scenarios.",
    link: "/blogs/3",
  },
];

const trendingPosts = [
  {
    title: "7 Apps Savvy Reporters Use to Make Journalism Easier",
    link: "/blogs/journalism-tools",
  },
  {
    title:
      "These 5 Apps are Great for Young Professionals Starting Their Career",
    link: "/blogs/young-professionals-tools",
  },
  {
    title: "Make Podcasting Easy With iPhone and Android Call Recording",
    link: "/blogs/podcasting-tools",
  },
];

const BlogPage = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((blog) => blog.category === filter);

  return (
    <div className="p-6 mx-auto max-w-7xl mt-24">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Blogs</h1>
        <p className="text-gray-600">
          Stay up-to-date with the latest news, tips, and insights.
        </p>
      </header>

      {/* Filters */}
      <div className="flex justify-center mb-8">
        <select
          className="p-2 border border-gray-300 rounded-md"
          onChange={handleFilterChange}
          value={filter}
        >
          <option value="All">All</option>
          <option value="Professional Development">
            Professional Development
          </option>
          <option value="Productivity">Productivity</option>
          <option value="Research">Research</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Blog List */}
        <div className="grid gap-6 lg:col-span-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {/* Sidebar */}
        <aside className="p-4 bg-gray-100 rounded-lg shadow-md lg:col-span-1">
          <Trending posts={trendingPosts} />
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
