import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodoStatus: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
