import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {setRegisterDetail,toregister} from '../Redux/loginslice'
import { useEffect } from 'react'
import { useNavigate,Link} from "react-router-dom"


function Register() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const registerDetail=useSelector((state)=> state.user.register_details)
    const{isregister}=useSelector((state)=> state.user)

    useEffect(() => {
        if(isregister){
            navigate("/")
        }  
    }, [isregister])
    
  return (
    <>
     <section className="vh-100">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                         <div className="col-12">
                            <div className="card">
                                 <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder="your Name" onChange={(e=> dispatch(setRegisterDetail({...registerDetail,"username":e.target.value})) )}/>
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="your Email" onChange={(e=> dispatch(setRegisterDetail({...registerDetail,"email":e.target.value})) )} />
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="your Password" onChange={(e=>dispatch(setRegisterDetail({...registerDetail,"password":e.target.value})))}/>
                  
                </div>


                <div className="d-flex justify-content-center">
                <Link to="/"> <button type="button"className="btn btn-primary " onClick={()=> dispatch(toregister(registerDetail,"key")) }>Register</button></Link>
                 <Link to="/"> <button type="button"className="btn btn-primary  ml-5" >Go back</button></Link>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Register