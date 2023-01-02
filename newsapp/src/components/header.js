import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {setislogin} from '../Redux/loginslice'
import axios from 'axios'
import { useEffect } from 'react'
import {setsearch,setnews} from '../Redux/newslice'
function Header() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const{islogin}=useSelector((state)=> state.user)
  const{search}=useSelector((state)=> state.newsdata)
  const{news}=useSelector((state)=>state.newsdata)
  let getnewsdata=async ()=>{
    const {data}= await axios.get("http://localhost:39000/get")
    dispatch(setnews(data)) 
 }
 useEffect(() => {
  getnewsdata()
  
 },[])
    let cate=news.map(data=>data.category)
    let filt=cate.filter((item,index)=>cate.indexOf(item)=== index)
  return (
    <div className='text-center bg-dark'>
    <div>
            <div className="collapse navcolor navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ">  
                  </ul>
                  </div>
                  </div>
    {filt&&filt.map((data=>{
       return(<React.Fragment key={data}>
      <Link to={`/nextpage/${data}`}> <p className='pl-5 bg-dark btn  text-white'>{data}</p></Link>
       </React.Fragment>)
    }))}

  <Link to="/bookmark"> <p className='pl-4 mr-4 bg-dark btn  text-white'>Bookmark</p></Link> 
  <button className='btn btn-primary'  onClick={()=>{dispatch(setislogin(false));localStorage.removeItem("user"); navigate("/")}}>Logout</button>
    </div>
  )
}
export default Header