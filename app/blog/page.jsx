"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]); // All blogs
  const [visibleBlogs, setVisibleBlogs] = useState([]); // Blogs currently visible
  const [visibleCount, setVisibleCount] = useState(8); // Number of blogs visible at a time

  // Fetch blogs from JSON file
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/blogs.json");
      const data = await response.json();
      setBlogs(data);
      setVisibleBlogs(data.slice(0, 8)); // Show the first 8 blogs initially
    };

    fetchBlogs();
  }, []);

  // Handle "Show More" button click
  const handleShowMore = () => {
    const newVisibleCount = visibleCount + 8; // Load 8 more blogs
    setVisibleCount(newVisibleCount);
    setVisibleBlogs(blogs.slice(0, newVisibleCount)); // Update visible blogs
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Latest Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleBlogs.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <div className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative h-36">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className="p-4">
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                  <h3 className="text-md font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    by admin | {blog.comments} Comments
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Show More Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
