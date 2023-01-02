import { useState } from 'react';
  import{BrowserRouter as Router,
      Routes,
      Route
  }from 'react-router-dom'
import Login from './Login';
import Input from './Input';
import Usercontext from '../components/usercontext';
import Register from './Register';
import View from './View';

function Mainroute() {

const [details, setdetails] = useState({
  name:"",
  email:"",
  skills:[],
  education:[],
  experience:[],
  fathername:"",
  dob:null,
  gender:"",
  nationality:"",
  address:"",
  languages:[]
})

  const [logged, setlogged] = useState(false)
  return (
    <div>
      <Usercontext.Provider value={{logged, setlogged,details, setdetails}}>
      <Router>
  
  <Routes>
      <Route path='/' exact element={<Login/>} />   
      <Route path='/input'  element={<Input/>} />   
      <Route path='/register'  element={<Register/>} />   
      <Route path='/view/:id'  element={<View/>} />   
      
  </Routes>
</Router>
      </Usercontext.Provider>

    </div>
  )
}

export default Mainroute
//  const LoginAPI = async() => {
//   const {data}=await axios.post('http://karka.academy/api/action.php',JSON.stringify(requestdata))
  
//   if(data.status==="success"){
//       setIsLog(true)
//       localStorage.setItem("key",true)
//       setUserData(data.data)
//       navigate('/FillData');

//   }
// }
//  useEffect(
//   ()=>{
//       if(islog || localStorage.getItem("key")) navigate('/')
// },
// []
// )
//  useEffect(()=>{
// if(localStorage.getItem("key") || islog) navigate('/Filldata')
// },
// [islog]
// )