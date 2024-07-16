
import Blogcard from '../components/Blogcard'
import { Appbar } from '../components/Appbar'
import { useBlogs } from '../hooks'
import Skeleton from '../components/Skeleton';

export default function Blogs() {
  const {loading,blogs}=useBlogs();
  console.log("joo")
  console.log(blogs)
  if(loading){
    return <div className='my-44'>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>
  }
  return (
    <>
    <Appbar/>
    <div className='px-64 py-16'>
    {blogs.map(blog => <Blogcard
                    id={blog.id}
                    authorname={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishDate={"2nd Feb 2024"}
                />)}
    </div>
    
    </>
    
  )
}
