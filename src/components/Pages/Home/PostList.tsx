"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Post } from "@/components/Hooks/type";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [showCount, setShowCount] = useState(9);
  const [isShowingAll, setIsShowingAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting by ID
    filteredPosts.sort((a, b) => {
      if (sortOption === "asc") {
        return a.id - b.id; // Ascending
      } else {
        return b.id - a.id; // Descending
      }
    });

    if (isShowingAll) {
      setDisplayedPosts(filteredPosts);
    } else {
      setDisplayedPosts(filteredPosts.slice(0, showCount));
    }
  }, [searchTerm, sortOption, showCount, posts, isShowingAll]);

  const handleShowMore = () => {
    setShowCount((prev) => prev + 9);
  };

  const handleShowAll = () => {
    setIsShowingAll(true);
    setDisplayedPosts(posts);
  };

  const handleShowLess = () => {
    setIsShowingAll(false);
    setShowCount(9);
  };

  return (
    <>
      <div className="text-center text-teal-500 text-4xl font-semibold mb-5 mt-2">
        TOTAL POST: {posts.length}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-3 mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
        />
        <div className="flex items-center">
          <label className="mr-4 text-lg font-medium text-gray-700">
            Sort by ID:
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as "asc" | "desc")}
              className="border border-gray-300 rounded-md p-2 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedPosts.length > 0 ? (
            displayedPosts.map((post) => (
              <div
                key={post.id}
                className="card  bg-gradient-to-r from-teal-200 via-teal-300 to-teal-700 p-8 rounded-lg  shadow-lg mb-5"
              >
                <h2 className="text-lg font-bold mb-2">Num: {post.id}</h2>
                <h2 className="text-lg font-bold mb-2">Title: {post.title}</h2>
                <p className="text-gray-700">Description: {post.body}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-white mt-4 inline-block font-medium hover:underline"
                  >
                    Read more
                  </Link>{" "}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mb-5 text-red-500 font-semibold text-2xl col-span-full">
              No posts found.
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          {!isShowingAll && showCount < posts.length && (
            <>
              <button
                onClick={handleShowMore}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Show More
              </button>
              <button
                onClick={handleShowAll}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Show All
              </button>
            </>
          )}
          {(showCount > 9 || isShowingAll) && (
            <button
              onClick={handleShowLess}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostList;
