import { FC } from "react"
import { Post } from "../../../Interface"
import { Avatar, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
type Props = {
    post:Post
}

const PostExcerpt:FC<Props> = ({post}) => {
  return (
    <>
     <Card sx={{ bgcolor: "#1E1E1E", color: "white" }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "blue" }}>{post.id}</Avatar>}
          title={post.title}
        />
        <CardContent>
          <Typography variant="body2" className="line-clamp">
            {post.body}
          </Typography>
          <PostAuthor author={post.author} />
          <TimeAgo date={post.date} />
        </CardContent>
        <CardActions>
          {/* <Button size="small">See More</Button> */}
          <ReactionButton id={post.id} reaction={post.reaction} />
        </CardActions>
      </Card>
    </>
  )
}

export default PostExcerpt