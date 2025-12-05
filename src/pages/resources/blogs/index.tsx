import React from "react";
import { BlogSection } from "../../../components/ui/blogs/blog-section";
import { MyPage } from "@/components/layouts/types";
import Head from "next/head";

const Blog: MyPage = () => {
  return (
    <>
    <Head>
    <title>Fleet Leasing Australia | Blog</title>
    </Head>
    <div className="flex flex-col items-center w-full relative bg-white">
      <BlogSection />
    </div>
    </>
  );
};

export default Blog;
Blog.Layout = "Default";

