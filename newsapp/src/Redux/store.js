import { configureStore } from "@reduxjs/toolkit";
import newslice from "./newslice";
import loginslice from "./loginslice";
export const store= configureStore({
    reducer:{
        newsdata:newslice,
        user:loginslice
    }
})
    
