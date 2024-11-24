package com.example.todo_app.service;

import com.example.todo_app.model.Todo;
import org.springframework.stereotype.Service;
import com.example.todo_app.repository.TodoRepository;

import java.util.List;

@Service
public class TodoService {

    public final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

     // Add a method to create a new Todo
    public String createTodo(Todo todo) {
        todoRepository.save(todo);
        return "Todo created successfully";
    }

    public String deleteTodoById(Long id) {
        todoRepository.deleteById(id);
        return "Todo deleted successfully";
    }
    public String updateTodo(Long id, Todo todo) {
        if (todoRepository.existsById(id)) {
            Todo existingTodo = todoRepository.findById(id).get();
            existingTodo.setDescription(todo.getDescription());
            todoRepository.save(existingTodo);
            return "Todo updated successfully!";
        } else {
            return "Todo not found!";
        }
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }
}
