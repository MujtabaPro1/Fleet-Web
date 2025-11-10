import React from "react";
import { BlogSection } from "../../components/ui/blogs/blog-section";
import { MyPage } from "@/components/layouts/types";

const Blog: MyPage = () => {
  return (
    <div className="flex flex-col items-center w-full relative bg-white">
      <BlogSection />
    </div>
  );
};

export default Blog;
Blog.Layout = "Default";

