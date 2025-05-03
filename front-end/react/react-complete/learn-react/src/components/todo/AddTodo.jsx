import { useState } from "react";
import { useTodos, useTodosDispatch } from "../../context/TodoContext";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const onAddTodo = (text) => {
    dispatch({ type: "added", id: todos.length, text: text });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
            onAddTodo(e.target.value);
            setTodoText("");
          }
        }}
      />
      <button
        onClick={() => {
          // 저장
          onAddTodo(todoText);
          setTodoText("");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddTodo;
