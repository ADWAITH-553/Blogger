import { Avatar } from "./Blogcard"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Appbar = () => {
    const navigate=useNavigate()
    return <div>
        <div className="border-b  flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-bold text-2xl text-blue-700">
                BLOGGER
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            <button onClick={()=>{window.localStorage.clear();navigate('/signin')}}type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
             dark:border-red-500 dark:text-red-500 dark:hover:text-white
              dark:hover:bg-red-600 dark:focus:ring-red-900">Logout</button>
            <Avatar name={window.localStorage.getItem('first')||" "} />
        </div>
    </div>
    </div>
}
