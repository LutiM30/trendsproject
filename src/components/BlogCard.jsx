import React from 'react';

const BlogCard = ({ image, category, title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-red-500 uppercase font-bold">{category}</span>
        <h3 className="text-lg font-bold mt-2 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-500 font-semibold hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
