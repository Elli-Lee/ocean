import { createContext, useContext } from "react";
import todoReducer from "../reducer/todo-reducer";
import { useImmerReducer } from "use-immer";

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML & CSS 공부하기", isDone: false },
    { id: 1, text: "JavaScript 공부하기", isDone: false },
  ]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodosDispatch() {
  return useContext(TodoDispatchContext);
}
