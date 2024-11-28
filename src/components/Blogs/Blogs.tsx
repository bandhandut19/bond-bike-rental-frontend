import { TBlogs } from "@/types";
import blogs from "../../../public/blogs.json";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const Blogs = () => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-4xl py-2 font-bold text-white lg:font-extrabold mb-5 mt-3 text-center">
          Blogs
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 lg:gap-10 items-center">
        {blogs.slice(0, 4).map((blog: TBlogs) => (
          <div
            key={blog.id}
            className="card bg-[#D7DFA3] border-2 border-white mb-4 rounded shadow-md text-center cursor-pointer  hover:scale-110 duration-300"
          >
            <div className="card-body flex">
              <h2 className="card-title flex-1">{blog.title}</h2>
              <p className="flex-2">{blog.description}</p>
            </div>
            <div className="flex items-center justify-center mb-5">
              <Button className="hover:bg-[#1A4862]">
                <Link to={blog.url}>Read Full Blog</Link>
              </Button>
            </div>
            <div className="">
              <img src={blog.image} alt="Shoes" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
