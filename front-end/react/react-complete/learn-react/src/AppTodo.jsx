import "./App.css";
import TodoList from "./components/todo/TodoList";
import { useReducer, useState } from "react";
import todoReducer from "./reducer/todo-reducer";
import { useImmerReducer } from "use-immer";

function AppTodo(props) {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML & CSS 공부하기", isDone: false },
    { id: 1, text: "JavaScript 공부하기", isDone: false },
  ]);
  const [todoText, setTodoText] = useState("");
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // 1] added
  const handleAddTodo = () => {
    const nextId = todos.length;
    dispatch({ type: "added", id: nextId, text: todoText });
    setTodoText(""); // null 이나 undefined를 넣으면 안됨
  };

  // 2] added_index
  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    dispatch({ type: "added_index", id: nextId, text: todoText, insertAt });
    setTodoText("");
  };

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: "deleted", deleteId });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      handleAddTodo();
    }
  };

  // 4] done
  const handleToggleTodo = (id, isDone) => {
    dispatch({ type: "done", id, isDone });
  };

  // 5] reversed
  const handleReverse = () => {
    dispatch({ type: "reversed" });
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
