import React from "react";

const BlogCard = ({title, description, description2 }) => {
  return (
    <div className="p-4 m-10 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
      <div className="space-y-2 py-3">
        <h1 className="line-clamp-1 font-bold">{title}</h1>
        <p className="line-clamp-2 text-sm">{description}</p>

      </div>
    </div>
  );
};

export default BlogCard;
