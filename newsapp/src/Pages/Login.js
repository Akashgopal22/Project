import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {setdetails,test,setisregister} from '../Redux/loginslice'
import { useEffect } from 'react'
import { useNavigate,Link} from "react-router-dom"
function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const reqdata=useSelector((state)=> state.user.details)
    const{islogin}=useSelector((state)=> state.user)
    const local=localStorage.getItem("user")
    useEffect(() => { 
      dispatch(setisregister(false))
        if(islogin && local ){
            navigate("/nextpage/Home") 
        }
    }, [islogin])
  return (
    <>
    <div className='container'>
    <h1 className='text-center bg-dark text-white p-2 mb-3'>Login</h1>
    <form className='mt-5   p-5 '>
   <div className="form-group ">
    <label >Email address</label>
    <input type="email"   className="form-control "  onChange={(e)=> dispatch(setdetails({...reqdata, "email":e.target.value})) }  aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password"  className="form-control"    onChange={(e)=> dispatch(setdetails({...reqdata, "password":e.target.value})) }   placeholder="Password"/>
  </div>
  <button type='button'  className="btn btn-primary" onClick={()=>dispatch(test(reqdata,"key"))} >Login</button>
  <p>Not a member? <Link to ="/register">Register</Link></p> 
</form>
</div>
    </>
  )
}

export default Login