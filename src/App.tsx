import {} from "react"
import "./App.css"
import { Box, Container } from "@mui/material"
import { AddPost, PostList } from "./app/features/post"
import { Alert } from "./app/features/alert"

function App() {
  return (
    <>
      <Container>
        <Box width="100%">
        <Alert/>
        </Box>
        <AddPost />
        <PostList />
      </Container>
    </>
  )
}

export default App
