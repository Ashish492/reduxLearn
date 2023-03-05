import { IconButton,Alert as MuiAlert, Slide } from "@mui/material"
import { FC } from "react"
import { getAlert, hideAlert } from "./alert"
import { useAppDispatch } from "../../../hook"
import { Close } from "@mui/icons-material"
type Props = {}
const Alert:FC<Props> = () => {
const dispatch=useAppDispatch()
const handleClose=()=>{dispatch(hideAlert({}));console.log("called")}
const alert=getAlert()
  return (
    <>
   <Slide in={alert.open} direction="left" unmountOnExit mountOnEnter >
<MuiAlert variant="filled" action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <Close fontSize="inherit" />
            </IconButton>
          } severity={alert.type}>
  {/* <AlertTitle>{alert.type}</AlertTitle> */}
{alert.message}
  </MuiAlert>
  </Slide>
    </>
  )
}
export default Alert