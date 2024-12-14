import { TBlogs } from "@/types";
import blogs from "../../../public/blogs.json";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blogs = () => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-4xl py-2 font-bold bg-[#1A4862] text-white lg:font-extrabold mb-5 mt-3 text-center">
          Blogs
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 items-center">
        {blogs.slice(0, 4).map((blog: TBlogs) => (
          <Card
            key={blog.id}
            className="bg-[#1A4862] rounded-none hover:scale-105"
          >
            <CardHeader>
              <div>
                <img className="" src={blog.image} alt={blog.title} />
              </div>
              <CardTitle className="text-white font-bold py-1">
                {blog.title}
              </CardTitle>
              <CardDescription className="text-white">
                {blog.description}
              </CardDescription>
              <button className="btn rounded-none">Read Full Blog</button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
