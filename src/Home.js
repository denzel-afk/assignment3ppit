import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const { error, isPending, data:blogs} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div>
            {/* 3 baris di bawah ini ada di sebagian besar components, bisa dipisahin & digabung jadi satu (pake children prop) */}
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} />}
        </div>
    );
}
 
export default Home
