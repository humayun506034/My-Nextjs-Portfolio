/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import { getAllBlog } from "@/app/utils/actions/blogManagement";

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const blogs = await getAllBlog()
  const matchProjects= blogs?.data.find((blog:any) => blog._id === blogId)
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-center sm:text-left">
        {matchProjects?.title}
      </h1>

      <div className="w-full h-60 sm:h-80 md:h-96 relative rounded-lg overflow-hidden mb-6">
        <Image
          src={matchProjects?.image}
          alt={matchProjects?.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          unoptimized
        />
      </div>

      <div
        className="prose prose-invert prose-lg max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: matchProjects?.content }}
      />
    </div>
  );
};

export default BlogDetailsPage;
