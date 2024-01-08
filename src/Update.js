import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import useFetch from './useFetch'

const Update = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id)
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Low');
    const [dueDate, setDate] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()

    const handleEdit = (e) =>{
        e.preventDefault();
        const blog={title, priority, dueDate, description};
        fetch('http://localhost:8000/blogs/'+id,{
            method:'PUT',
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            navigate('/')
        })
    }

    const handleCancel =()=>{
        navigate(-1);
    }

    return (
        <div className="w-screen">
        {isPending && <div>Loading...</div>}
        {error && <div>{ error }</div>}
            <h2 className="text-2xl font-bold my-3 border-b-2">Make changes Todo</h2>
            <form onSubmit={handleEdit}>
                <div>
                    <label className="align-left block">Title: </label>
                    <input value= {title} className="w-full px-4 py-2 my-2 border border-gray-300 box-border block rounded-md" placeholder='Todo title' type="text" required onChange={(e)=>setTitle(e.target.value)}></input>
                    <label>Priority: </label>
                    <select className="w-full px-4 py-2 my-2 border border-gray-300 box-border block rounded-md" placeholder='Select todo priority' value={priority} onChange={(e)=>setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <label>Date: </label>
                    <input className="w-full px-4 py-2 my-2 border border-gray-300 box-border block rounded-md" placeholder='Pick a date' type="date" value={dueDate} onChange={((e)=>setDate(e.target.value))}></input>
                    <label>Description</label>
                    <textarea className="w-full px-4 py-2 my-2 border border-gray-300 box-border block rounded-md" placeholder='Type todo description here' required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    { !isPending && <button className="bg-black text-white font-semibold border-0 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 transition: ease-in-out duration-300">Save Todo</button>}
                    {isPending && <button disabled>Saving Todo...</button>}
                </div>
            </form>
            <button className="my-3 bg-red-500 text-white font-semibold border-2 border-red-500 py-2 px-4 rounded-md cursor-pointer hover:bg-white hover:text-red-500 transition: ease-in-out duration-300" onClick={handleCancel}>Cancel</button>
        </div>
    );
}
 
export default Update;