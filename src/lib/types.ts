// Define a type for the slice state
export interface todoItem {
    id: string,
    name: string,
    completed: Boolean,
    editing: Boolean
}

export interface ItemsState {
    data: todoItem[]
}

export enum VisibilityFilters {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    UPDATE_FILTER = 'UPDATE_FILTER'
}