import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodoContext";
import { useMemo, useState } from "react";
function TodoList() {
  const [isDoneFilter, setIsDoneFilter] = useState(false);
  const todos = useTodos();

  const handleFilterChange = () => {
    setIsDoneFilter(!isDoneFilter);
  };

  const getFilteredTodos = () => {
    if (!isDoneFilter) {
      return todos;
    }
    return todos.filter((item) => item.isDone);
  };

  const filteredTodos = getFilteredTodos();

  const getStatsCount = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((item) => item.isDone)?.length;

    return { totalCount, doneCount };
  };

  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  return (
    <>
      <div>
        <input
          id="isDone"
          type="checkbox"
          onChange={handleFilterChange}
          checked={isDoneFilter}
        />
        <label htmlFor="isDone">
          {" "}
          완료된 항목 보기 ({doneCount}/{totalCount})
        </label>
      </div>
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
