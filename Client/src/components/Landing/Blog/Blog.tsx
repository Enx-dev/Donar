import Image from "next/image";
import React from "react";
import pH from "../../../asset/pH.jpeg";
import BlogCards from "../../shared/Card/BlogsCards";

type Props = {};

const blog = [
  {
    img: pH,
    name: "Donate & Sponsor a Child in Africa",
    date: "November 3, 2022",
    content: `Save the Children is responding to the immense needs of
vulnerable African children and families by helping to improve access to healthcare and education.`,
  },
  {
    img: pH,
    name: "Donate & Sponsor a Child in Africa",
    date: "November 3, 2022",
    content: `Save the Children is responding to the immense needs of
vulnerable African children and families by helping to improve access to healthcare and education.`,
  },
  {
    img: pH,
    name: "Donate & Sponsor a Child in Africa",
    date: "November 3, 2022",
    content: `Save the Children is responding to the immense needs of
vulnerable African children and families by helping to improve access to healthcare and education.`,
  },
];

const Blog = (props: Props) => {
  return (
    <section className="contain my-20">
      <h1 className="text-light-text text-3xl lg:text-5xl font-medium text-center contain ">
        Recent Blog
      </h1>
      <div className="py-10 flex gap-4 items-center justify-between">
        <div className="hidden lg:block">
          <div className="w-[577px] rounded-xl border border-light-accent">
            <Image className="rounded-t-lg w-full" src={pH} alt="image" />
            <div className="p-6 text-text space-y-4">
              <p className="bg-gradient-to-tr from-light-accent to-light-accent2 bg-clip-text text-transparent">
                November 3, 2022
              </p>
              <p className="text-light-text">
                Donate & Sponsor a Child in Africa
              </p>
              <p className="text-base leading-6 text-light-text">
                Save the Children is responding to the immense needs of
                vulnerable African children and families by helping to improve
                access to healthcare and education.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-8 ">
          {blog.map((item) => {
            return (
              <BlogCards
                name={item.name}
                content={item.content}
                date={item.date}
                img={item.img}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
