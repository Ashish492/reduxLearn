import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../hook";
import { Alert} from "../../../Interface";
import { AlertColor } from "@mui/material";

const initialState:Alert={
    type:undefined,
    message:"",
    open:false
}

const alertSlice=createSlice({
name:"alert",
initialState,
reducers:{
setAlert:(state,action:PayloadAction<{type:AlertColor,message:string}>)=>{
state.type=action.payload.type
state.message=action.payload.message
state.open=true
},
hideAlert:(state,action)=>{
state.type=undefined
state.message=""
state.open=false
}
}
})
export const getAlert=()=>useAppSelector(state=>state.alert)
export const alertReducer=alertSlice.reducer
const {setAlert,hideAlert}=alertSlice.actions
export {setAlert,hideAlert}