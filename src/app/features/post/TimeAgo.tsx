import { Typography } from "@mui/material"
import { formatDistanceToNow, parseISO } from "date-fns"
import { FC } from "react"
type Props = {
  date: string
}

const TimeAgo: FC<Props> = ({ date }) => {
  const timeAgo = formatDistanceToNow(parseISO(date))
  return (
    <>
      <Typography
        display="block"
        title="timeStamp"
        textAlign="end"
        variant="body1"
      >
        {timeAgo} ago
      </Typography>
    </>
  )
}

export default TimeAgo
