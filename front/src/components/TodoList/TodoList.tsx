import React, { useState } from 'react'

import { Box, Container } from '@mui/material'
import TaskItem from '../Task/TaskItem'
import { ITodo } from '../../models/ITodo'
import './TodoList.css'
import TodoCreate from '../TodoCreate/TodoCreate'
import { todoAPI } from './../../services/TodoService';
interface TodoListProps {
    todos?: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    const [newTaskText, setNewTaskText] = useState('')
    const [createTodo, { }] = todoAPI.useCreateTodoMutation()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value)
    }

    const sumbitHandler: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newTaskText)
        await createTodo({
            title: newTaskText,
            date: "",
            state: "created",
            tags: [],
        } as ITodo)
    }

    return (
        <Container>
            {todos && todos.map(e =>
                <Container key={e.id} className='task__container'>
                    <TaskItem task={e} />
                </Container>
            )}
            <Box component="form" onSubmit={sumbitHandler} sx={{ marginBottom: 20 }}>
                <TodoCreate onChange={handleChange} />
            </Box>
        </Container>
    )
}

export default TodoList