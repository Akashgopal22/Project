import React, { useEffect } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'
import { setnews } from '../Redux/newslice'
import axios from 'axios'
function Nextpage() {
   const dispatch=useDispatch()
    const{news}=useSelector((state)=>state.newsdata)
    const{islogin}=useSelector((state)=> state.user)
    const navigate=useNavigate()
    const parms=useParams()
    const local=localStorage.getItem("user")
    let getnewsdata=async ()=>{
      const {data}= await axios.get("http://localhost:39000/get")
      dispatch(setnews(data)) 
   }
   useEffect(() => {
    getnewsdata()
    
   },[])
   

      
  return (
   <>
    <Header/>
    <div className='container'>
    <div className='row'>
    {
      news&&news?.map((data)=>{
          if (data.category==parms.category){
              return(<React.Fragment key={data.id}>
              <div className="card col-4 border-0 mt-4 " >
            <Link to={`/view/${data.id}`}> 
                    <img src={data.image} className="card-img-top" />
                      <div className="card-body">
                          <h5 className="card-title">{data.subcontent}</h5>
                      </div>
                      </Link> 
                      </div>
                    
          </React.Fragment>)   
          }
      })
    }
    </div>
    
    </div>
      <Footer/>
   </>
  )
}

export default Nextpage