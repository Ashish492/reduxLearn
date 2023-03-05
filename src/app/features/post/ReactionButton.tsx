import { Button, Stack } from "@mui/material"
import { FC } from "react"
import { addReaction } from "./postSlice"
import {
  Coffee,
  EmojiEmotions,
  Favorite,
  Rocket,
  ThumbUp,
} from "@mui/icons-material"
import { useAppDispatch } from "../../../hook"
import { Reaction } from "../../../Interface"

type Props = {
  id: string
  reaction: Reaction
}

const ReactionButton: FC<Props> = ({ id, reaction }) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Stack gap={5} direction="row">
        <Button
          startIcon={<Favorite />}
          onClick={() => dispatch(addReaction({ id, reaction: "heart" }))}
        >
          {reaction.heart}
        </Button>
        <Button
          startIcon={<Coffee />}
          onClick={() => dispatch(addReaction({ id, reaction: "coffee" }))}
        >
          {reaction.coffee}
        </Button>
        <Button
          startIcon={<Rocket />}
          onClick={() => dispatch(addReaction({ id, reaction: "rocket" }))}
        >
          {reaction.rocket}
        </Button>
        <Button
          startIcon={<ThumbUp />}
          onClick={() => dispatch(addReaction({ id, reaction: "thumbsUp" }))}
        >
          {reaction.thumbsUp}
        </Button>
        <Button
          startIcon={<EmojiEmotions />}
          onClick={() => dispatch(addReaction({ id, reaction: "wow" }))}
        >
          {reaction.wow}
        </Button>
      </Stack>
    </>
  )
}

export default ReactionButton
