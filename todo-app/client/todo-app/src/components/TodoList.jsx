import React, { useEffect, useState } from 'react';
import TodoService from './TodoService.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({description: '' });
    useEffect(() => {
        fetchTodos();
    }, []);
    const fetchTodos = async () => {
        try {
            const response = await TodoService.getAllTodos();
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };
    const handleCreateTodo = async () => {
        try {
            await TodoService.createTodo(newTodo);
            setNewTodo({description: '' });
            fetchTodos();
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await TodoService.deleteTodo(id);
            fetchTodos();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <div>
            <h1 style={{textAlign:'center', color:'lightskyblue'}}>TODO-APP</h1>
                <div style={{padding: '10px 50px'}}>
                    <TextField fullWidth
                               id="standard-basic" label="Todo giriniz" variant="standard"
                               value={newTodo.description}
                               onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
                    />
                    <div style={{padding:'20px', display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="contained" onClick={handleCreateTodo}>Add Todo</Button>
                    </div>
                    {todos.map((todo) => (
                        <div style={{
                            border: '1px solid',
                            padding: '10px',
                            margin: '15px',
                            borderRadius: '5px',
                            display: 'flex', justifyContent: 'space-between'}}
                             key={todo.id}>
                            <p>{todo.description}</p>
                            <div>
                                <IconButton style={{}} aria-label="delete" size="large" onClick={() => handleDeleteTodo(todo.id)}>
                                    <DeleteIcon fontSize="inherit"  />
                                </IconButton>
                            </div>


                        </div>
                    ))}
                </div>


        </div>
    );
}

export default TodoList;
