import { FC } from "react"
import { selectUsers } from "../user"
import { Typography } from "@mui/material"
type Props = {
  author: number
}

const PostAuthor: FC<Props> = ({ author }) => {
  const users = selectUsers()
  const user = users.find(usr => usr.id == author)
  return (
    <>
      { (
        <Typography textAlign="end" display="block" variant="caption">
        by  <strong>{user ? user.name :"unknown author"}</strong>
        </Typography>
      )}
    </>
  )
}

export default PostAuthor
