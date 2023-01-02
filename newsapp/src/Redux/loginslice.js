import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState={
    details:{
        email:null,
        password:null,
    },
    islogin:false,
    register_details:{
        username :null,
        email :null,
        password :null,
    },
    isregister:false   
}

export const loginslice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setdetails:(state,action)=>{
            state.details=action.payload
        },
        setislogin:(state,action)=>{
            state.islogin=action.payload

        },
        setRegisterDetail:(state,action)=>{
            state.register_details=action.payload

        },
        setisregister:(state,action)=>{
            state.isregister=action.payload
        }
    }
})
 export  const test= (reqdata,key)=>async (dispatch)=>{
    if(reqdata.email&&reqdata.password){
        const {data}=await axios.post('http://localhost:39000/login', JSON.stringify(reqdata))
        console.log(data);
        if(data.length!=0){
            dispatch(setislogin(true))
            localStorage.setItem("user",true)
        }
    }
    else{
        alert ("please enter details ")
    }
}
export const toregister=(registerDetail,key)=> async(dispatch) =>{ 
    if(registerDetail){
        try {
            const data=await axios.post('http://localhost:39000/register',JSON.stringify(registerDetail))
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
       
    }
    else{
        alert('please enter all the details')
    }

}
export const{setdetails,setislogin,setRegisterDetail,setisregister}=loginslice.actions;
export default loginslice.reducer