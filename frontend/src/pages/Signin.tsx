
import Auth from '../components/Auth'
import Quote from '../components/Quote'
export default function Signin() {
  return (
    <div> <div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
        <Auth type="signin"/>
    </div>
    <div className='hidden md:block'>
    <Quote/>
    
    </div>
    </div></div>
  )
}
