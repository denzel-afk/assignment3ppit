import { useParams, useNavigate } from "react-router-dom"
import useFetch from './useFetch'
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from 'react'

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate();
    const handleClickDelete = () =>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    const [completed, setCompleted] = useState(false)
    const handleCheckBox = (e) =>{
        e.preventDefault();
        const updatedBlog={...blog, completed};
        fetch('http://localhost:8000/blogs/'+id,{
            method:'PUT',
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(updatedBlog)
        }).then(()=>{
            if(completed){
                setCompleted(false)
            }else{
                setCompleted(true)
            }
        })
    }
    return (
        <div>
            { isPending && <div>Loading...</div>}
            { error && <div> { error }</div>}
            { blog && (
                <article>
                    <div className="flex max-w-screen-md">
                        <input type="checkbox" checked={completed} onClick={handleCheckBox} size={32}/>
                        <h2 className="pl-3 pb-4 font-bold border-gray-300 border-b-2 text-3xl">{blog.title}</h2>
                    </div>
                    <div className="flex my-4">
                        <div className="flex-shrink-0 ">
                            <span className="font-semibold  text-2xl">Priority</span>
                        </div>
                        <div className="flex-grow text-center">
                            <span className="font-semibold text-2xl">Due</span>
                        </div>
                    </div>
                    <div className="flex my-4">
                        <div className="flex-shrink-0 ">
                            <span className={`m-0 ${blog.priority === "Low" ? 'text-green-400': `${blog.priority === "Medium"? 'text-amber-400':'text-red-600'}`}`}>{blog.priority}</span>
                        </div>
                        <div className="flex-grow text-center">
                            <span>{blog.dueDate}</span>
                        </div>
                    </div>
                    <h2 className="font-semibold text-2xl my-2">Description</h2>
                    <div className="border-gray-3 border-2 border-r-0 rounded-md">
                        <h2>{blog.description}</h2>
                    </div>
                    <div className="my-5 flex justify-between">
                        <Link className="bg-black text-white font-semibold border-0 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 transition: ease-in-out duration-300" to='/'>OK</Link>
                        <div className="flex">
                            <button className="mx-2 bg-white text-red-600 border-2 border-red-600 py-2 px-4 rounded-md hover:bg-red-600 transition ease-in-out duration-300 hover:text-white flex " onClick={handleClickDelete}>
                                <FaTrashAlt className="my-1 mr-3"/>
                                <h2>Delete</h2>
                            </button>
                            <Link to={`/Update/${blog.id}`} className="bg-gray-200 text-black border-2 border-black py-2 px-4 rounded-md hover:bg-slate-500 transition ease-in-out duration-300 flex">
                                <CiEdit className="my-1 mr-3"/>
                                <h2>Edit</h2>
                            </Link>
                        </div>
                       
                    </div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;