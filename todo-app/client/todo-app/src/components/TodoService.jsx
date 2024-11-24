import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/todo";

const TodoService = {
    getAllTodos: () => axios.get(`${API_BASE_URL}/all`),
    createTodo: (todo) => axios.post(`${API_BASE_URL}/create`, todo),
    deleteTodo: (id) => axios.delete(`${API_BASE_URL}/delete/${id}`),
    updateTodo: (id, todo) => axios.put(`${API_BASE_URL}/update/${id}`, todo),
};

export default TodoService;
