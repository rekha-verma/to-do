import { PayloadAction, createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import { ItemsState, todoItem } from '../../types';
import { getTodosApi, addTodoApi, deleteTodoApi } from '../../../api';



export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await getTodosApi();
    return response;
});


export const addTodo = createAsyncThunk<todoItem, Omit<todoItem, 'id'>>('todos/addTodo', async (todo) => {
    const newTodo = await addTodoApi(todo);
    return newTodo;
}
);

export const deleteTodo = createAsyncThunk<string, string>(
    'todos/deleteTodo',
    async (todoId) => {
        await deleteTodoApi(todoId);
        return todoId;
    }
);

const initialState: ItemsState = {
    data: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        removeToDo(state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload)

        },
        updateToDo(state, action) {
            state.data = state.data.map((item) => item.id === action.payload.id ? { ...item, name: action.payload.name } : item)

        },
        toggleEdit(state, action) {
            state.data = state.data.map((item) => item.id === action.payload.id ? { ...item, editing: !item.editing } : item)

        },
        toggleToDo(state, action) {
            state.data = state.data.map((item) => item.id === action.payload.id ? { ...item, completed: !item.completed } : item)

        },
    },
    extraReducers: (builder) => {
        builder
            // Add Todo
            .addCase(addTodo.pending, (state) => {
                // state.loading = true;
                // state.error = null;
            })
            .addCase(addTodo.fulfilled, (state, action: PayloadAction<todoItem>) => {
                // state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                // state.loading = false;
                // state.error = action.error.message || 'Failed to add todo';
            })
            // Fetch Todos
            .addCase(fetchTodos.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                // state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                // state.loading = false;
                // state.error = action.error.message;
            })
            // Delete Todo
            .addCase(deleteTodo.pending, (state) => {
                // state.loading = true;
                // state.error = null;
            })
            .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
                // state.loading = false;
                state.data = state.data.filter(todo => todo.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                // state.loading = false;
                // state.error = action.error.message || 'Failed to delete todo';
            });
    },
})

export const { removeToDo, updateToDo, toggleEdit, toggleToDo } = todoSlice.actions
export default todoSlice.reducer