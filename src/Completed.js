import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Completed = () => {
    const { error, isPending, data:blogs} = useFetch('http://localhost:8000/blogs')
  // Kalo completion-nya mau disimpen, state completion todo-nya harus di-store
  // juga di db.json
  // Terus, blogs-nya di sini di-filter by completion & di-pass ke BlogList
    return ( 
        <div>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} />}
        </div>
    );
}
 
export default Completed;
