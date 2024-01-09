import { Link } from "react-router-dom"
import { LuDot } from "react-icons/lu";

const BlogList = ({ blogs }) => {
  // Buat completion, bisa ditambah checkbox yang kalo diklik ngesend PUT
  // request buat nge-update blognya
    return (
        <div>
            <div className="flex justify-between border-b-4 border-gray-300">
                <h2 className="mx-6 my-4 font-bold text-2xl">Title</h2>
                <h2 className="mx-6 my-4 font-bold text-2xl"> Due</h2>
            </div>
            {blogs.map(blog=>(
                <div key={blog.id}>
                    <input type="checkbox"></input>
                    <Link className="flex justify-between border-gray-200 border-b-2 hover:text-gray-400 transition ease-in-out duration-400" to={`/blogs/${blog.id}`}>
                        <div className="flex">
                            <h2 className="font-bold ml-4 p-4">{ blog.title }</h2>
                        </div>
                        <div className="flex">
                            <p className="p-4">{ blog.dueDate }</p>
                            <LuDot size={64} className={`m-0 ${blog.priority === "Low" ? 'text-green-400': `${blog.priority === "Medium"? 'text-amber-400':'text-red-600'}`}`}/>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
