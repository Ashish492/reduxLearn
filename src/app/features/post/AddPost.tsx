import {
  Box,
  Button,
  MenuItem,
  Paper,
  Typography,
  TextField,
} from "@mui/material"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { selectUsers } from "../user"
import { addPost } from "."
import { motion, Variants } from "framer-motion"
import { useAppDispatch } from "../../../hook"
type Props = {}
const AddPost: FC = (props: Props) => {
  const distPatch = useAppDispatch()
  const FormSchema = z.object({
    body: z.string().min(1, "enter a content"),
    title: z.string().min(1, "enter a title"),
    author: z.number({ invalid_type_error: "chose a author" }),
  })
  const users = selectUsers()
  type FormData = z.infer<typeof FormSchema>
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })
  const onHandleSubmit: SubmitHandler<FormData> = data => {
    distPatch(addPost(data))
    alert("post added")
  }
  const MotionTextField = motion(TextField)
  const variants: Variants = {
    error: {
      x: 40,
      transition: {
        type: "spring",
        bounce: 0.5,
        velocity: 15,
        repeat: 3,
        repeatType: "mirror",
        duration: 0.1,
      },
    },
  }
  return (
    <>
      <Typography variant="h2" color="Highlight">
        Add Post
      </Typography>
      <Paper elevation={4}>
        <Box
          component={"form"}
          display="flex"
          flexDirection="column"
          bgcolor="#1E1E1E"
          p={5}
          mb={5}
          gap={2}
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <MotionTextField
            label="title"
            color="secondary"
            variant="outlined"
            variants={variants}
            {...register("title")}
            animate={!!errors.title ? "error" : ""}
            error={!!errors.title}
            helperText={errors?.title?.message}
          />
          <MotionTextField
            label="content"
            variant="outlined"
            {...register("body")}
            color="secondary"
            error={!!errors.body}
            helperText={errors?.body?.message}
          />
          <MotionTextField
            select
            label="select author"
            variant="outlined"
            {...register("author")}
            color="secondary"
            error={!!errors.author}
            helperText={errors?.author?.message}
            defaultValue={""}
            fullWidth
          >
            <MenuItem value="">select author</MenuItem>
            {users.map((user, index) => (
              <MenuItem value={user.id} key={index}>
                {user.name}
              </MenuItem>
            ))}
          </MotionTextField>
          <Button variant="contained" type="submit">
            Add Post
          </Button>
        </Box>
      </Paper>
    </>
  )
}
export default AddPost
