import {Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {bookmark,setbook} from '../Redux/newslice'
import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header';
function Bookmark() {
  const{book}=useSelector((state)=>state.newsdata)
  const{islogin}=useSelector((state)=> state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const local=localStorage.getItem("user")
  console.log(book);
  useEffect(() => {
    if(!islogin && !local){
      navigate('/')
    }
  }, [islogin])
  let torepeat=book.filter((item,index)=>book.indexOf(item)===index)
  let Delete=(index)=>{
    let todel=torepeat.filter((data,val)=>val!==index)
    dispatch(setbook(todel))
  }
  return (
    <>
    <Header/>

    <div className='container'>
    <div className='row m-0'>
  
    { torepeat.length? torepeat && torepeat.map((data,index)=>{

        return(<React.Fragment key={data.id}>
         <div className="card col-4 border-0 mt-4 mb-5" >
           <Link to={`/view/${data.id}`}> 
                   <img src={data.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{data.subcontent}</h5>
                    </div>
                    </Link> 
                    <button className='btn btn-danger' onClick={()=>Delete(index)}>Delete</button>
                    </div>
        </React.Fragment>)
    }):<h3 className='text-center mt-5 ml-5'> No bookmark pages is added....</h3> } 
    </div>
    </div>
    </>
  )
}
export default Bookmark
