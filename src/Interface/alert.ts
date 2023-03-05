import { AlertColor } from "@mui/material"

export type Alert={
    type:undefined | AlertColor
    message:null |string
    open:boolean
}
export type  AlertType="error"|"success"|"warning"|"info"