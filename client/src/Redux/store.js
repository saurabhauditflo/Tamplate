import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {userApi} from "../APi/userAPi"
import counterReducer from "../Slices/CounterSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})
setupListeners(store.dispatch)

