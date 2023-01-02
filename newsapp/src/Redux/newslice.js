import { createSlice } from '@reduxjs/toolkit'
const initialState={
    news:[],
    book:[],
    search:""
}
export const newsslice=createSlice({
    name:"newsapp",
    initialState,
    reducers:{
        bookmark:(state,value)=>{ 
            state.book=[...state.book,value.payload]
        },
        setbook:(state,action)=>{
            state.book=action.payload
        },
        setsearch:(state,action)=>{
         state.search=action.payload

        },
        setnews:(state,action)=>{
         state.news=action.payload

        }
        
    }
})
export const{bookmark,setbook,setsearch,setnews}=newsslice.actions;
export default newsslice.reducer