import React from 'react'
import{BrowserRouter as Router,
    Routes,
    Route
}from 'react-router-dom'
import View from './Pages/View'
import Nextpage from './Pages/Nextpage'
import Bookmark from './Pages/Bookmark'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Header from './components/header'
import { useSelector} from 'react-redux'
function Mainroute() {
  const{islogin}=useSelector((state)=> state.user)
  const local=localStorage.getItem("user")
  return (
    <>
    <Router>
        <Routes>
             <Route path='/nextpage/:category'  element={<Nextpage />}/> 
             <Route path='/view/:id'  element={<View />}/>
             <Route path='/' exact  element={<Login />}/>
             <Route path='/register'  element={<Register/>}/>
            <Route path='/bookmark'  element={<Bookmark />}/> 
        </Routes>
    </Router>
    </>
  )
}
export default Mainroute