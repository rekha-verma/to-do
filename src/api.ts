// src/api.ts
import axios, { AxiosResponse } from 'axios';
import { todoItem } from './lib/types';

const API_URL = 'http://localhost:3000/todos';


export const getTodosApi = async (): Promise<todoItem[]> => {
    try {
        const response = await axios.get<todoItem[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const addTodoApi = async (todo: Omit<todoItem, 'id'>): Promise<todoItem> => {
    // Example API call
    const response: AxiosResponse<todoItem> = await axios.post(API_URL, todo);
    return response.data;
};


export const deleteTodoApi = async (todoId: string): Promise<void> => {
    await axios.delete(`${API_URL}/${todoId}`);
};
