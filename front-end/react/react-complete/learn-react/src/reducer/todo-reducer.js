export default function todoReducer(draft, action) {
  switch (action.type) {
    case "added": {
      const { id, text } = action;
      draft.push({
        id,
        text,
        isDone: false,
      });
      break;
    }
    case "added_index": {
      const { id, text, insertAt } = action;
      draft.splice(insertAt, 0, { id, text, isDone: false });
      break;
    }
    case "deleted": {
      const { deleteId } = action;
      return draft.filter((todo) => todo.id !== deleteId);
    }
    case "done": {
      const { id, isDone } = action;
      const targetTodo = draft.find((todo) => todo.id === id);
      targetTodo.isDone = isDone;
      break;
    }
    case "reversed": {
      return draft.toReversed();
    }

    default: {
      throw Error("알 수 없는 액선 타입: " + action.type);
    }
  }
}
