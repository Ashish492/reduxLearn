import { configureStore } from "@reduxjs/toolkit"
import { postReducer, userReducer } from "./features"
import { alertReducer } from "./features/alert"

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    alert:alertReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
