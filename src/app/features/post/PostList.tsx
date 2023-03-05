import {
  Box,
  LinearProgress,
  Stack
} from "@mui/material"
import { fetchPosts, getPostError, getPostStatus, selectAllPost } from "./postSlice"
import { FC, ReactNode, useEffect } from "react"
import { useAppDispatch } from "../../../hook"
import PostExcerpt from "./PostExcerpt"
import { setAlert } from "../alert"
type Props = {}
const PostList: FC = (props: Props) => {
   const postStatus=getPostStatus()
  const postError=getPostError()
  const dispatch=useAppDispatch()
  useEffect(()=>{
    console.log(postStatus)
   postStatus==="idle"&& dispatch(fetchPosts())
  },[])
  const posts = selectAllPost()
const content:Record<Exclude<typeof postStatus,"idle">,()=>ReactNode> ={
  loading: function (): ReactNode {
    return <>
  <Box sx={{ width: '100%' }} position="absolute" top={0}>
      <LinearProgress color="primary"/>
    </Box>
    </>
  },
  success: function (): ReactNode {
return posts.slice().sort((a, b) => b.date.localeCompare(a.date)).map((post,key)=><PostExcerpt {...{key,post}}/>)
  },
  fail: function (): ReactNode {
    dispatch(setAlert({type:"error",message:"unable to load post"}))
    return <></>
  }
}
console.log(postStatus);
  return (
    <>
      <Stack direction="column" bgcolor="#1A2027" gap={8}>
        {
          postStatus !="idle" && content[postStatus]()
        }
      </Stack>
    </>
  )
}
export default PostList
