import React from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
  1: {
    title: '4 Reasons Every Professional Needs a Call Recording App in 2022',
    content: `Call recording apps are essential for professionals to keep track of important conversations, avoid miscommunication, and stay productive. In this post, we’ll explore the top 4 reasons why every professional should consider using a call recording app.`,
    image: '/images/blog1.jpg',
  },
  2: {
    title: 'Recording Business Calls: How to Stay Productive When Working From Home',
    content: `Working from home has its challenges, but recording your business calls can help you stay organized and productive. Learn how call recording apps can streamline your work-from-home experience.`,
    image: '/images/blog2.jpg',
  },
  3: {
    title: 'The 6 Phone Conversations You’ll Be Glad You Recorded',
    content: `Certain phone conversations can be crucial for personal and professional growth. This post highlights six scenarios where having a recorded conversation can save the day.`,
    image: '/images/blog3.jpg',
  },
};

const BlogDetail = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const blog = blogData[id]; // Fetch the corresponding blog details

  // If the blog does not exist, show a fallback
  if (!blog) {
    return <h2 className="text-center text-red-500">Blog not found!</h2>;
  }

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="object-cover w-full h-64 mb-6 rounded-lg" />
      <p className="text-lg leading-relaxed text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
