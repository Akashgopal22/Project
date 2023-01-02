import axios from 'axios';
import {useState,useEffect} from 'react'
import {useParams } from 'react-router-dom'

function View() {
  const [getresume, setgetresume] = useState()
  const params = useParams();

  
  let togetresume= async()=>{
    let {data}=  await axios.get(`http://karka.academy/api/action.php?request=get_react_resume_by_id&user=akash5&id=${params.id}`)
    let detail=data.data
    let fulldetail=JSON.parse(detail.data)
    setgetresume({...fulldetail})
  }
  console.log(getresume);
  useEffect(() => {
    togetresume()
  }, [])

  return (
    <div>
       {getresume&&
        <div className="container  mt-5">
        <h1 className="font-weight-bold text-center">Resume</h1>
         <h2 id="name" className="font-weight-bold">{getresume.name}</h2>
        <p className="font-weight-bold pt-2">E-mail ID :<span className="ps-2" id="email">{getresume.email}</span></p>
        <p className="font-weight-bold">Mobile :<span className="ps-2" id="mobile">{getresume.mobile}</span></p>
        <p className="font-weight-bold">Role :<span className="ps-2" id="rolename">{getresume.role}</span></p>
       
        <div className="container">
          <table className="table table-bordered  border-dark mt-3">
            <thead className="text-center">
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Institute</th>
                <th scope="col">Year</th>
                <th scope="col">Percentage</th>
              </tr>
            </thead>
            <tbody className="text-center" id="education">{ getresume.education?.map((value,index)=>{return(
              <tr key={index}>
                <td id="course">{value.course}</td>
                <td id="instutite">{value.institute}</td>
                <td id="year">{value.year}</td>
                <td id="percentage0">{value.percentage}</td>
              </tr>)
            })}</tbody>
          </table>
        </div>
       
      <h5 className="font-weight-bold pt-4">Skills : <span id="skills">{getresume.skills.join(",")}</span></h5>
  
         <h5 className="font-weight-bold pt-4 pb-4">Experience</h5>
        <div className="container" id="experience">
        {getresume.experience.map((item,value)=>{
          return(
            <>
              <p className="font-weight-bold">Organisation :<span className="pl-1" id="organisation">{item.organisation}</span></p>
              <p className="font-weight-bold">Role :<span id="role" className="pl-1">{item.role}</span></p>
              <p className="font-weight-bold">Year :<span id="period" className="pl-1">{item.exyear}</span></p>
            
            </>
          )
        })}
        </div>
  
         <h5 className="font-weight-bold pt-4 pb-4">Personal Details</h5>
        <div className="container">
          <div className="row">
            <p className="font-weight-bold col-2">DOB</p>
            <b className="col-1">:</b>
            <span className="col-5" id="DOB">{getresume.dob}</span>
          </div>
          <div className="row">
            <p className="font-weight-bold col-2">Address</p>
            <b className="col-1" >:</b>
            <span className="col-5" id="address">{getresume.address}</span>
          </div>
          <div className="row">
            <p className="font-weight-bold col-2">Gender</p>
            <b className="col-1" >:</b>
            <span className="col-5" id="gender">{getresume.gender}</span>
          </div>
          <div className="row">
            <p className="font-weight-bold col-2">Language</p>
            <b className="col-1" >:</b>
            <span className="col-5" id="language">{getresume.languages.join(",")}</span>
          </div>
          </div>
    </div>
       }
    </div>
  )
}

export default View