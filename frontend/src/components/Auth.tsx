import  { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignupInput } from 'adwaith53-bloggercommon'
import { BACKEND_URL } from '../Config'
// import { Navigate } from 'react-router-dom'
import axios from 'axios'
export default function Auth({type}:{type:"signup" | "signin"}) {
  const [postInputs,setPostInputs]=useState<SignupInput>({
    name:"",
    username:"",
    password:""
  })
  const navigate=useNavigate()
  async function sendReq(){
    try {
        console.log("hii")
        const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs)
        console.log(response.data)
        const jwt=response.data
        console.log(postInputs.username)
        localStorage.setItem("token",jwt)
        localStorage.setItem("first",postInputs.username||" ")
        navigate('/blogs')

    } catch (error) {
        alert("invalid credentials")
    }
    }
    return (
        <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold text-blue-600">
                        {type=="signup" ?"CREATE AN ACCOUNT":"WELCOME BACK"}
                    </div>
                    <div className="text-slate-300">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="name..." onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}
                    <LabelledInput label="Username" placeholder="......@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendReq} type="button" className="mt-8 w-full text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    type?:string
}




function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
        
          <div>
            <label  className="bloc mb-2 text-sm font-medium text-blue-500 dark:text-white">{label}</label>
            <input type={type || "text"} onChange={onChange} id={label}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
               
               dark:focus:border-blue-500" placeholder={placeholder} required />
      
            </div>
    </div>
}
