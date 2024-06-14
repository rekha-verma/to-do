import { useAppDispatch, useAppSelector } from "../hooks"
import { updateFilter } from "../lib/features/todo/filterSlice";
import { VisibilityFilters } from "../lib/types";

type FilterProps = {
    children: string,
    filter: VisibilityFilters.SHOW_ALL | VisibilityFilters.SHOW_ACTIVE | VisibilityFilters.SHOW_COMPLETED
}
const FilterLink = ({ children, filter }: FilterProps) => {
    const selectedFilter = useAppSelector((state) => state.filterReducer.selectedFilter);
    const dispatch = useAppDispatch();
    const selectFilter = (filter: VisibilityFilters) => {
        dispatch(updateFilter(filter));
    }
    return (
        <span className={`flex items-center justify-between gap-4 bg-slate-50 ${selectedFilter === filter ? 'text-zinc-900' : 'text-pink-500'}`} onClick={() => selectFilter(filter)}>
            {children}
        </span>
    );
}

export default FilterLink;