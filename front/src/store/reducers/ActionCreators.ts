import axios from "axios";
import { ITag, ITodo } from "models"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTags = createAsyncThunk(
    'tags/fetchAll',
    async (_, thinkAPI) => {
        try {
            const response = await axios.get<ITag[]>('http://localhost:5000/tags')
            return response.data
        } catch (e) {
            return thinkAPI.rejectWithValue("Не удалось загрузить таски")
        }
    }
)

export const fetchTodo = createAsyncThunk(
    'todo/fetchAll',
    async (_, thinkAPI) => {
        try {
            const response = await axios.get<ITodo[]>('http://localhost:5000/todos')
            return response.data
        } catch (e) {
            return thinkAPI.rejectWithValue("Не удалось загрузить таски")
        }
    }
)