import { useAppDispatch, useAppSelector } from '../hooks';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import { removeToDo, fetchTodos, deleteTodo } from '../lib/features/todo/todoSlice';
import FilterLink from './Filter';
import { VisibilityFilters, todoItem } from '../lib/types';
import ToDoMessage from '../components/ToDoMessage';
import { useEffect } from 'react';


const filterItems = (items: todoItem[], selectedFilter: string) => {
    switch (selectedFilter) {
        case VisibilityFilters.SHOW_ACTIVE:
            return items.filter((item) => !item.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return items.filter((item) => item.completed);
        default:
            return items;
    }
}

const ToDoList = () => {
    const items = useAppSelector((state) => filterItems(state.todosReducer.data, state.filterReducer.selectedFilter));
    const selectedFilter = useAppSelector((state) => state.filterReducer.selectedFilter);
    const dispatch = useAppDispatch();

    const onItemRemove = (id: string) => {
        dispatch(deleteTodo(id));
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className='w-2/4 container m-auto'>
            <TodoForm />
            <div>
                {items.length === 0
                    ? (
                        <ToDoMessage selectedFilter={selectedFilter} />
                    ) : (
                        <>
                            <ul className="items">
                                {items.map((item) => (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        onItemRemove={onItemRemove}
                                    />
                                ))}
                            </ul>

                            <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
                            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>completed</FilterLink>
                        </>
                    )}
            </div>

        </div >
    );
}

export default ToDoList