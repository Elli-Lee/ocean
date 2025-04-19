import "./App.css";
import TodoList from "./components/todo/TodoList";
import { useState } from "react";

function AppTodo(props) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML & CSS 공부하기", isDone: false },
    { id: 1, text: "JavaScript 공부하기", isDone: false },
  ]);
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    const nextId = todos.length;
    setTodos([
      ...todos,
      {
        id: nextId,
        text: todoText,
        isDone: false,
      },
    ]);
    setTodoText(""); // null 이나 undefined를 넣으면 안됨
  };

  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    const newTodos = [
      ...todos.slice(0, insertAt),
      { id: nextId, text: todoText, isDone: false },
      ...todos.slice(insertAt),
    ];
    setTodos(newTodos);
    setTodoText("");
  };

  const handleReverse = () => {
    // const newTodos = [...todos];
    // newTodos.reverse();
    // setTodos(newTodos);
    setTodos(todos.toReversed());
  };

  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(newTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id, isDone) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleSelectChange = (e) => {
    setInsertAt(e.target.value);
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <div>
        <input
          type="text"
          onChange={handleTodoTextChange}
          value={todoText}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>

      <div>
        <select value={insertAt} onChange={handleSelectChange}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>
              {index} 번째
            </option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}> {insertAt} 번째 추가</button>
      </div>
      <div> Preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
