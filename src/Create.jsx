import { useState } from "react"
import { useNavigate} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Low');
    const [dueDate, setDate] = useState('');
    const [isPending, setIsPending] = useState(false)
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState([])
    const navigate = useNavigate();

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog={title, priority, dueDate, description, completed};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            navigate('/')
            setCompleted(false)
        })
    }

    return (
        <div className="w-screen h-screen">
            <h2 className="w-screen text-2xl font-bold my-3 border-b-2">Create a New Todo</h2>
            <form className= "w-screen" onSubmit={handlesubmit}>
                    <label className="align-left block">Title: </label>
                    <input className="w-screen px-4 py-2 my-2 border border-gray-300 box-border block rounded-md hover:bg-gray-200 transition ease-in-out duration-300 text-gray-600" placeholder='Todo title' type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                    <label>Priority: </label>
                    <select className="w-screen px-4 py-2 my-2 border border-gray-300 box-border block rounded-md hover:bg-gray-200 transition ease-in-out duration-300 text-gray-600" placeholder='Select todo priority' required value={priority} onChange={(e)=>setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <label>Date: </label>
                    <input className="w-screen px-4 py-2 my-2 border border-gray-300 box-border block rounded-md hover:bg-gray-200 transition ease-in-out duration-300 text-gray-600" placeholder='Pick a date' type="date" value={dueDate} onChange={((e)=>setDate(e.target.value))}></input>
                    <label>Description</label>
                    <textarea className="w-screen px-4 py-2 my-2 border border-gray-300 box-border block rounded-md hover:bg-gray-200 transition ease-in-out duration-300 text-gray-600" placeholder='Type todo description here' required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    { !isPending && <button className="bg-black text-white font-semibold border-0 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 transition: ease-in-out duration-300" >Add Todo</button>}
                    {isPending && <button disabled>Adding Todo...</button>}
            </form>
        </div>
    );
}
 
export default Create;