import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Blogcard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 px-16">
                    <div className="text-slate-600 text-lg mx-12">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 mx-12flex flex-col justify-center">
                            <Avatar  name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..." 
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}