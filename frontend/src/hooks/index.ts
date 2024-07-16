import { useState,useEffect } from "react"
import { BACKEND_URL } from "../Config"
import axios from "axios"
export interface Blog{
    "content":string,
    "title":string,
    "id":number,
    "author":{
        "name":string
    }
}
export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true)
    const[blog,setBlog] = useState<Blog>()
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then(response=>{
            setBlog(response.data.blog);
           // console.log(response.data)
            console.log(blog)
            setLoading(false)
        })
   // console.log(blogs)
    },[id])

    return {
        loading,blog
    }
}
export const useBlogs=()=>{
    const [loading,setLoading]=useState(true)
    const[blogs,setBlogs] = useState<Blog[]>([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then(response=>{
            setBlogs(response.data.blogs);
           // console.log(response.data)
            console.log(blogs)
            setLoading(false)
        })
   // console.log(blogs)
    },[])

    return {
        loading,blogs
    }
}