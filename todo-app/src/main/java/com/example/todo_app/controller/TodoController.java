package com.example.todo_app.controller;

import com.example.todo_app.model.Todo;
import org.springframework.web.bind.annotation.*;
import com.example.todo_app.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    public final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/all")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }
    @PostMapping("/create")
    public String createTodo(@RequestBody Todo todo) {
       return todoService.createTodo(todo);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteTodo(@PathVariable Long id) {
        return todoService.deleteTodoById(id);
    }

    @PutMapping("/update/{id}")
    public String updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        return todoService.updateTodo(id, todo);
    }


}
