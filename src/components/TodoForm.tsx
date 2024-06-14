import { useRef } from "react";
import { useAppDispatch } from "../hooks";
import Button from "./Button";
import { addTodo } from "../lib/features/todo/todoSlice";
import { todoItem } from "../lib/types";

const TodoForm = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef && inputRef.current && inputRef.current.value !== '') {
            const newTodo: Omit<todoItem, 'id'> = {
                name: inputRef.current.value,
                editing: false,
                completed: false,
            };
            dispatch(addTodo(newTodo));
            inputRef.current.value = '';
        }
    };
    return (
        <div>
            <label htmlFor="input-group-1" className="block text-sm text-gray-900 dark:text-white font-bold font-sans mb-7 mt-5">TO-DO NOW</label>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img src="/todo.png" width={14} alt='Add to do' />
                </div>
                <form className="flex items-center justify-between gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        ref={inputRef}
                        id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Add your task......"
                    />
                    <Button type="submit" />
                </form>
            </div>
        </div>
    )
}

export default TodoForm