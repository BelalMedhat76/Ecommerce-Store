// 

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  const { id } = useParams(); // Fetch the dynamic blog ID
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/blogs.json");
      const data = await response.json();

      // Find the selected blog
      const selectedBlog = data.find((item) => item.id === id);
      setBlog(selectedBlog);

      // Store all blogs and filter for related blogs
      setAllBlogs(data);
      const filteredBlogs = data.filter((item) => item.id !== id).slice(0, 4); // Show 4 related blogs
      setRelatedBlogs(filteredBlogs);
    };

    fetchBlogs();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
      <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Blog Image and Content */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-80 md:h-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 transform hover:scale-105"
            />
          </div>

          {/* Blog Content */}
          <div className="p-8 flex flex-col justify-center animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-500 mb-2">{blog.date}</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {blog.content}
            </p>

            {/* Toggleable Content */}
            <details className="mb-4">
              <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                Read More Details
              </summary>
              <p className="text-gray-700 mt-2">
                {blog.extraContent || "No additional content available."}
              </p>
            </details>

            {/* Back to Blog Button */}
            <Link
              href="/blog"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Related Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedBlogs.map((related) => (
              <div
                key={related.id}
                className="group bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/blog/${related.id}`}>
                  <div className="relative h-32 mb-3">
                    <Image
                      src={related.image}
                      alt={related.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300">
                    {related.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Section */}
        <div className="p-8 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Explore More Content
          </h2>
          <p className="text-gray-600 mb-4">
            Discover more engaging blogs, tutorials, and updates from our team.
          </p>
          <Link
            href="/blog"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
          >
            Browse All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
