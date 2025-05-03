import { useTodosDispatch } from "../../context/TodoContext";

const TodoItem = ({ item }) => {
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
};

export default TodoItem;
