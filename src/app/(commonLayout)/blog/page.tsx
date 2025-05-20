import { getAllBlog } from "@/app/utils/actions/blogManagement";
import BlogCard from "@/components/shared/BlogCard";

export type TBlog = {
    _id: string, image: string, title: string, content: string, user: string
}

const BlogPage = async () => {
    const data = await getAllBlog()
    const blogData = data?.data

    return (
        <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
            {/* Section Title */}
            <div className="mb-10 animate-fade-in">
                <p className="section-sub-text">My Blogs</p>
                <h2 className="section-head-text">Blogs.</h2>
            </div>

            {/* Description */}
            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  animate-fade-in delay-200">


                </p>
            </div>
            <div className=" flex flex-wrap gap-10 justify-between">
                {
                    blogData?.map((blog: TBlog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))
                }
            </div>

        </div>
    );
};

export default BlogPage;