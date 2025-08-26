import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice";
import token from "../features/token/tokenSlice";
export const store = configureStore({
    reducer: {
        token,user
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;