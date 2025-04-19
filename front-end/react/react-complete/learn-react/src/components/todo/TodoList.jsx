function TodoList({ todos = [], onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={(e) => onToggleTodo(item.id, e.target.checked)}
          />
          <span> {item.isDone ? <del>{item.text}</del> : item.text}</span>
          <button onClick={() => onDeleteTodo(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
