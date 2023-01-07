import React, { useEffect, useState } from 'react'
import axios from "axios";
function App() {
  
  const [id, setid] = useState("")
  const [data, setdata] = useState([])
  const [bookcount, setbookcount] = useState([])
  const [create, setcreate] = useState({
    title:null,
    author:null,
    year:null
  })
  let get=  async()=>{
    const {data}=await axios.get("http://localhost:39000/read") 
    setdata(data)
  }
  let set= async()=>{
    try {
      const data=await axios.post("http://localhost:39000/create",JSON.stringify(create)) 
      
    } catch (error) {
      console.log(error);
      
    }
    setcreate({...create,title:"",author:"",year:""})
    get()
    
  }
  let update= async ()=>{
    let value={
      id:id,
      title:create.title,
      author:create.author,
      year:create.year
    }
    try {
      const data=await axios.post(`http://localhost:39000/update`,JSON.stringify(value))
      
    } catch (error) {
      console.log(error);

    }
    setcreate({...create,title:"",author:"",year:""})
    get()
  }
  const edit=(title,author,year)=>{
    setcreate({...create,title:title,author:author,year:year})
  }
  const  delet= async(id)=>{
    let value={
      id:id
    }
    try {
      const data=await axios.post(`http://localhost:39000/delete`,JSON.stringify(value))
      
    } catch (error) {
      console.log(error);
      
    }
    
    get()
  }
  const count=async ()=>{
    const {data}=await axios.get("http://localhost:39000/group")
    setbookcount(data)
    

  }
  console.log(bookcount);
  useEffect(() => {
    get()
  }, [])
  return (
    <>
    <input type="text" value={create.title} onChange={(e)=>setcreate({...create,title:e.target.value})} placeholder='title'/>
    <input type="text" value={create.author} onChange={(e)=>setcreate({...create,author:e.target.value})} placeholder='author'/>
    <input type="number" value={create.year} onChange={(e)=>setcreate({...create,year:e.target.value})} placeholder='year'/>
    <button onClick={()=>set()}>Submit</button>
    <button onClick={update}>Update</button>
    <table border={"3px"}> <tr>
          <th>Sl.no</th>
          <th>title</th>
          <th>author</th>
          <th>year</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
    {data&&data.map((details,index)=>{
      return(<>
       
        <tr>
          <td>{index+1}</td>
          <td>{details.title}</td>
          <td>{details.author}</td>
          <td>{details.year}</td>
           <td> <button onClick={()=>delet(details.id)}>delete</button></td>
          <td><button onClick={()=>{setid(details.id); edit(details.title,details.author,details.year)}}>edit</button></td> 
        </tr>
      
      </>)
    })}
     </table>
     <button onClick={count}>authorcount</button>
     {bookcount.map((data)=>{
      return(<>
      <li>{data.author}-{data.count}</li>
      
      </>)
     })}

    
    </>
    
  )
}

export default App
