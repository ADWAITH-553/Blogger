
import { Link } from 'react-router-dom'
interface BlogcardProps{
    authorname:string,
    title:string,
    content:string,
    publishDate:string
    id:number
}
export default function Blogcard({id,authorname,title,content,publishDate}:BlogcardProps) {
  return (
    <>
    <Link to={`/blog/${id}`}>
    <div className='flex pb-3'>
        <Avatar name={authorname || " "}/>
        <div className='pl-3 font-bold text-2xl'>
        {authorname}
        </div>
        <div className='py-1'>
            &#9679;
        </div>
        <div className='pl-3 font-light py-2 text-slate-400'>
        {publishDate}
        </div>
    </div>
    <div className='text-slate-800 font-black text-3xl'>
        {title}
    </div>
    <div className='text-slate-600  font-medium '>
        {content.slice(0,350)+"......"}
    </div>
    <div className='font-extralight'>
        {Math.ceil(content.length/100)+"m  read"}
    </div>
    <hr  className='my-5'/>
    </Link>
    </>
  )
}


export  function Avatar({name}:{name:string}){
return (<>

<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-700 rounded-full dark:bg-gray-600">
    <span className="font-medium text-white dark:text-gray-300">{name[0]}</span>
</div>

</>)
}