import React, { useEffect } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../components/header'

function Search() {
  const{news}=useSelector((state)=>state.newsdata)
  const navigate=useNavigate()
  const parms=useParams()
  console.log(parms.name.toUpperCase());


  return (
    <div className='text-center bg-dark'>
    <div>
            <div className="collapse navcolor navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ">  
                  </ul>
                  </div>
                  </div>
                  
    { 
    
    news&&news.map((data=>{
      if(data.category==parms.name.toUpperCase())
      {
       return(<React.Fragment key={data}>
      <Link to={`/nextpage/${data}`}> <p className='pl-5 bg-dark btn  text-white'>{data}</p></Link>
       </React.Fragment>)
      }
    }))}
  
  <Link to="/bookmark"> <p className='pl-4 mr-4 bg-dark btn  text-white'>Bookmark</p></Link> 
  </div>
  )
}

export default Search