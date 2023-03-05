import { PayloadAction, createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import axios from "axios"
import { sub } from "date-fns"
import { Post, Reaction } from "../../../Interface"
import { useAppSelector } from "../../../hook"
const POST_URL='https://jsonplaceholder.typicode.com/posts'
type InitialState={
   posts:Post[],
   status:"idle"|"loading"|"success"|"fail",
   error:string | null
}
const initialState:InitialState = {
  posts: [],
  status: "idle",
  error: null
}
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.concat(action.payload )
      },
      prepare({
        body,
        title,
        author,
      }: {
        body: string
        title: string
        author: number
      }) {
        return {
          payload: {
            body,
            title,
            author,
            id: nanoid(),
            date: new Date().toISOString(),
            reaction: {
              coffee: 0,
              heart: 0,
              wow: 0,
              rocket: 0,
              thumbsUp: 0,
            },
          },
        }
      },
    },
    addReaction(
      state,
      action: PayloadAction<{ reaction: keyof Reaction; id: string }>
    ) {
      const { reaction, id } = action.payload
      const selectedPost = state.posts.find(post => post.id == id)
      selectedPost && selectedPost.reaction[reaction]++
    },
  },
  extraReducers(builder) {
      builder.addCase(fetchPosts.pending, (state,action)=>{state.status='loading'})
      builder.addCase(fetchPosts.fulfilled , (state,action:PayloadAction< Omit<Post,"date"|"reaction">[]>)=>{
        console.log("called")
        state.status="success"
      const loadedPost=  action.payload.map((post,key)=>({
          ...post,
          reaction:{
             coffee: 0,
              heart: 0,
              wow: 0,
              rocket: 0,
              thumbsUp: 0,
          },
          date:sub(new Date(),{minutes:key+1}).toISOString()
        } satisfies Post))
        state.posts.push(...loadedPost)
      }).addCase(fetchPosts.rejected, (state,action:PayloadAction<any>)=>{
        state.status="fail"
        state.error=action.payload
      })
  },
})
export const fetchPosts=createAsyncThunk("post/fetchPosts",async (data,thunkApi) => {
  try {
    const response=await axios.get<Post[]>(POST_URL)
    return [...response.data]
  } catch (error:any) {
  return thunkApi.rejectWithValue(error.message)
  }
})
export const selectAllPost = () => useAppSelector(state => state.posts.posts)
export const getPostStatus=()=>useAppSelector(state=>state.posts.status)
export const getPostError=()=>useAppSelector(state=>state.posts.error)
export const postReducer = postSlice.reducer
const {addPost,addReaction } = postSlice.actions
export { addPost,addReaction}
