import React, { useState,useContext,useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import Usercontext from '../components/usercontext'
import axios from 'axios'


function Input() {
  let navigate=useNavigate()
  const value=useContext(Usercontext)
  const{logged,setlogged,details, setdetails}=value
  const [reqdata, setreqdata] = useState([])
  
  const [education, seteducation] = useState({
    course:"",year:"",institute:"",percentage:""
  })
  const [skills, setskills] = useState('')
  const [experience, setexperience] = useState({
    organisation:"",exyear:"",role:""

  })
  const [languages, setlanguages] = useState()
  useEffect(() => {
    if(!logged&&!localStorage.getItem("val")){
      navigate("/")
    }
  }, [logged])
  let req={
    request:"create_react_resume",
    user:"akash5",
    resume:details
  }


let resumedel=async (id)=>{
  let del=axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&user=akash5&id=${id}`)
  setdetails(del)
}
let show= async ()=>{
  let data= await axios.post( 'http://karka.academy/api/action.php?',JSON.stringify(req))

}
let getapi=async ()=>{
  let {data}=await axios.get('http://karka.academy/api/action.php?request=get_user_react_resume&user=akash5')
  let passvalue=data.data
  setreqdata(passvalue)

}
useEffect(() => {
  getapi()
}, [show])
let addcourses=(key,value)=>{
  seteducation({...education,[key]:value})
}
let addexp=(key,value)=>{
  setexperience({...experience,[key]:value})
}
let Delete =(index,value)=>{
  let delete_item=details[value].filter((item,id)=>{return (id!==index)})
  setdetails({...details,[value]:delete_item})
}

let adddetails= (key,value)=>{
  let update;
  if(key=="skills"||key=="education"||key=="experience"||key=="languages"){
    update={...details,[key]:[...details[key],value]}
    setdetails(update)
  }
  else{
    update={...details,[key]:value}
    setdetails(update)
  }
}
  return (
  <div className="container">
    <h1 className='text-white text-center bg-dark'>Enter your details here  <button onClick={()=>{setlogged(false);navigate("/")}} className='btn btn-primary text-right'>Logout</button></h1>
    <label >Name:</label>
    <input type="text" className='form-control' id="name" onChange={e=>adddetails('name',e.target.value)}/>
    <label >Email:</label>
    <input type="email" id="email" className='form-control' onChange={e=>adddetails('email',e.target.value)}/>
    
    <label >About me</label>
    <textarea name="" id="" cols="30" rows="5" className='form-control' onChange={e=>adddetails('aboutme',e.target.value)}></textarea>
  
    <label >mobile no:</label>
    <input type="number" className='form-control' onChange={e=>adddetails('phone',e.target.value)}/>
    <label >role:</label>
    <input type="text" className='form-control' onChange={e=>adddetails('role',e.target.value)}/>
    <label >objective:</label>
    <textarea name="" id="" cols="20" rows="3" className='form-control' onChange={e=>adddetails('objective',e.target.value)}></textarea>

    <label >skills:</label>
    <input type="text" className='form-control' value={skills}  onChange={(e)=>setskills(e.target.value)}/>
    <button className='btn btn-success mb-3' onClick={()=>{adddetails('skills',skills);setskills('')}}>Add</button>
    {details.skills ?.map((data,index)=>{return(<ul> <li className='p-2'>{data} <button className='btn btn-danger ' onClick={()=>Delete(index,"skills")} >Remove</button></li></ul>)})}
    <label ><b>Education:</b></label>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Year</th>
            <th scope="col">Institute</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text"  className='form-control' value={education.course}  onChange={e=>addcourses("course", e.target.value)}/></td>
            <td><input className='form-control'  value={education.year}   type="text"onChange={e=>addcourses("year",  e.target.value)}/></td>
            <td><input  className='form-control'  value={education.institute}   type="text" onChange={e=>addcourses( "institute", e.target.value)}/></td>
            <td><input  className='form-control'  value={education.percentage}   type="number"onChange={e=>addcourses( "percentage",  e.target.value)}/></td>
          </tr>
        </tbody>
      </table>
      <button className='btn' onClick={()=>{adddetails("education",education);seteducation({...education,course:"",year:"",institute:"",percentage:""})}}>Add</button>
      {details.education?.map((data,index)=>{
        return(<>
          <table className="table">
        <tbody>
          <tr>
            <td>{data.course}</td>
            <td>{data.year}</td>
            <td>{data.institute}</td>
            <td>{data.percentage}</td>
            <td><button className='btn btn-danger' onClick={()=>Delete(index,"education")}>Remove</button></td>
          </tr>
        </tbody>
      </table> 
        </>)
      })}
      <p>workingexperience:</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Organisation</th>
            <th scope="col">year</th>
            <th scope="col">role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><input  className='form-control' type="text"onChange={e=>addexp('organisation',e.target.value)}/></td>
            <td><input  className='form-control' type="text"onChange={e=>addexp('exyear',e.target.value)}/></td>
            <td><input className='form-control'  type="text" onChange={e=>addexp('role',e.target.value)}/></td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-success mb-3' onClick={()=>{adddetails('experience',experience);setexperience('')}}>Add</button>
      {details.experience ?.map((data,index)=>{
        return(<>
          <table className="table">
        <tbody>
          <tr>
            <td>{data.organisation}</td>
            <td>{data.exyear}</td>
            <td>{data.role}</td>
            <td><button onClick={()=>Delete(index,"experience")} className='btn btn-danger'>Remove</button></td>
          </tr>
        </tbody>
      </table> 
        </>)
      })}
      <label ><b>Personal details</b></label>
      <p>Fathername:</p>
      <input type="text"  className='form-control' onChange={e=>adddetails('fathername',e.target.value)}/>
      <label >dob:</label>
      <input type="text" className='form-control'  onChange={e=>adddetails('personaldetails',e.target.value,'dob')}/>
      <label >gender</label>
      <input type="text" className='form-control'  onChange={e=>adddetails('gender',e.target.value)}/> 
      <label >nationality:</label>
      <input type="text" className='form-control'  onChange={e=>adddetails('nationality',e.target.value)}/>
      <label >Address:</label>
      <textarea name="" id="" cols="30"  className='form-control' rows="5" onChange={e=>adddetails('address',e.target.value)}></textarea>
      <label >languagesknown:</label>
      <input type="text" className='form-control' value={languages}  onChange={(e)=>setlanguages(e.target.value)}/>
    <button className='btn btn-success mb-3' onClick={()=>{adddetails('languages',languages);setlanguages('')}}>Add</button>
    {details.languages ?.map((data,index)=>{return(<ul> <li className='p-2'>{data} <button className='btn btn-danger '>Remove</button></li></ul>)})}
  
    {reqdata&& reqdata.map((detail,index)=>{
      return(<>
      <li className='p-2'>{detail.id} {detail.user} {JSON.parse (detail.data).name}  <button onClick={()=>resumedel(detail.id)} className='btn btn-danger'>delete</button><Link to={`/view/${detail.id}`}><button className='btn btn-success'>view</button></Link> </li>
      </>)
    })}
    <button className="btn btn-primary submit mt-5  form-control" type='button' onClick={show}  >submit</button>
    </div>
  )
}
export default Input;