import { Post } from "@/components/Hooks/type";

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { id } = params;

  let post: Post | null = null;
  let errorMessage: string | null = null;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    post = await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    errorMessage = "Something went wrong. Please try again later.";
  }

  if (errorMessage) {
    return (
      <div className="text-center text-red-500 font-semibold text-2xl">
        {errorMessage}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center text-red-500 font-semibold text-2xl">
        Post not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="bg-gradient-to-r from-teal-100 via-teal-500 to-teal-300 p-8 rounded-lg shadow-lg">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="mb-4">
            <div className="mb-4  text-center">
              <span className="text-gray-600 font-semibold">Post ID:</span>
              {post.id}
            </div>
            <span className="text-gray-600 font-semibold">User ID:</span>
            {post.userId}
          </div>

          <h1 className="text-3xl font-extrabold text-teal-800 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed">{post.body}</p>
        </div>
      </div>
      <div className=" text-center  mt-40">
        <a
          href="/"
          className="text-teal-600 hover:underline  text-2xl  font-semibold"
        >
          &larr; Back to posts
        </a>
      </div>
    </div>
  );
};

export default PostPage;
