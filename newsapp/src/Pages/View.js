import React,{ useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {bookmark} from '../Redux/newslice'
import Header from '../components/header'
import Footer from '../components/footer'
function View() {
  const{news,book}=useSelector((state)=>state.newsdata)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const{islogin}=useSelector((state)=> state.user)
    const parms=useParams()
    const local=localStorage.getItem("user")
    useEffect(() => {
      if(!islogin &&!local){
        navigate('/')
      }
    }, [islogin])
  
 
  return (
    <>
    <Header/>
      <div className='container mb-5'>
    {news&&news.map((data)=>{
      {console.log(data)}
        if (data.id==parms.id) {
            return(<React.Fragment key={data.id}>
            <div className="container">
           <div className="btn btn-primary" onClick={()=>dispatch(bookmark(data))} >Bookmark</div>
            <h1 id="title">
                {data.subcontent}
            </h1>
            <div className="text-center">
              <img src={data.image}  width="60%" id="mainimage" alt=""/>
            </div>
            <p id="maincontent">
                {data.maincontent}
            </p>
        </div>
            </React.Fragment>)   
        }
    })}
    </div>
    <Footer/>
    </> 
  )
}

export default View