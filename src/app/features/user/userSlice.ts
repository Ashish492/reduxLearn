import { createSlice } from "@reduxjs/toolkit"
import { useAppSelector } from "../../../hook"


export type User = {
  id: number
  name: string
}
const initialState: User[] = [
  {
    id: 0,
    name: "ashish shreshta",
  },
  {
    id: 1,
    name: "sanjita shreshta",
  },
]
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectUsers = () => useAppSelector(state => state.users)
export const userReducer = userSlice.reducer
