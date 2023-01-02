import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import { useNavigate} from "react-router-dom"
import Usercontext from '../components/usercontext'
import {Link} from 'react-router-dom'

function Login() {
    let navigate=useNavigate()
    const value=useContext(Usercontext)
    const{logged,setlogged}=value
    useEffect(() => {
      if(logged) {

        navigate("/input")
      }
    }, [logged])
    const [user, setuser] = useState({
        request : "candidate_login",
         email : "",
         password : ""
    })
    let test=async()=>{
        const {data}= await axios.post('http://karka.academy/api/action.php', JSON.stringify(user))    
        if(data.status=="success"){
          setlogged(true)
          localStorage.setItem("val",true)
          navigate("/input")
        }
  }
  return (
    <div className='container'>
      <h1 className='text-center bg-dark text-white p-2 mb-3'>Login</h1>
    <form className='mt-5 p-5 '>
  <div className="form-group ">
    <label >Email address</label>
    <input type="email"   className="form-control "  onChange={(e)=>setuser({...user,email:e.target.value})}  aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password"  className="form-control"    onChange={(e)=>setuser({...user,password:e.target.value})}   placeholder="Password"/>
  </div>
  <button type='button'  className="btn btn-primary" onClick={test} >Login</button>
  <p>Not a member? <Link to ="/register">Register</Link></p>
</form>
</div>
  )
}
export default Login