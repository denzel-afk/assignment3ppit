import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const { error, isPending, data:blogs} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs.filter(blog=>blog.completed)} />}
        </div>
    );
}
 
export default Home