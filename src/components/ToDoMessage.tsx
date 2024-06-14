import { VisibilityFilters } from '../lib/types';
import FilterLink from '../pages/Filter';
import EmptyMessage from './EmptyMessage';

type MessageProps = {
    selectedFilter: string,
}

const ToDoMessage = ({ selectedFilter }: MessageProps) => {
    return (selectedFilter === VisibilityFilters.SHOW_COMPLETED
        ? (
            <>
                <EmptyMessage message='There are no tasks completed yet!' />
                < FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
                < FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                < FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>completed</FilterLink>
            </>
        ) : <div> <EmptyMessage message='Add your first To Do!' /></div>)

}

export default ToDoMessage