import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './features/todo/todoSlice'
import filterSlice from './features/todo/filterSlice'

export const store = configureStore({
    reducer: {
        todosReducer: todoSlice,
        filterReducer: filterSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch