import { useTodosDispatch } from "../../context/TodoContext";
import { memo } from "react";

const TodoItem = memo(({ item }) => {
  console.log("TodoItem 렌더링");
  const dispatch = useTodosDispatch();
  const onDeleteTodo = (deleteId) => {
    dispatch({ type: "deleted", deleteId });
  };
  const onToggleTodo = (id, isDone) => {
    dispatch({ type: "done", id, isDone });
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) => onToggleTodo(item.id, e.target.checked)}
      />
      <span> {item.isDone ? <del>{item.text}</del> : item.text}</span>
      <button onClick={() => onDeleteTodo(item.id)}>X</button>
    </label>
  );
});

TodoItem.displayName = "TodoItem";

export default TodoItem;
