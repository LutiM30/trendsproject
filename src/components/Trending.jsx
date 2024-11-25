import React from 'react';

const Trending = ({ posts }) => (
  <div>
    <h2 className="text-lg font-bold mb-4">Trending Now</h2>
    <ul>
      {posts.map((post, index) => (
        <li key={index} className="mb-3">
          <a
            href={post.link}
            className="text-blue-500 hover:underline font-semibold"
          >
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Trending;
