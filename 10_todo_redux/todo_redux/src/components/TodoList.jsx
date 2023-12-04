import { useSelector, useDispatch } from "react-redux";

import {
  toggleTodo,
  removeTodo,
  filterTodos,
  editTodo,
} from "../slices/todoSlice";
import { useState } from "react";

const TodoList = () => {
  const { list, filter } = useSelector((state) => state.todos);
  const [edit, setEdit] = useState("");
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const filteredList = list.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incompleted") return !todo.completed;
    return true;
  });

  const handleEdit = (id) => {
    if (!input) {
      return;
    }
    dispatch(editTodo({ id, input }));
    setEdit(null);
  };

  return (
    <div>
      <button onClick={() => dispatch(filterTodos("all"))}>Todas </button>
      <button onClick={() => dispatch(filterTodos("completed"))}>
        Completas{" "}
      </button>
      <button onClick={() => dispatch(filterTodos("incompleted"))}>
        Incompletas{" "}
      </button>

      <ul>
        {!edit ? (
          filteredList.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={todo.completed ? "line-trough" : ""}
              >
                {" "}
                {todo.text}
              </span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remover
              </button>

              <button onClick={() => setEdit(todo.id)}> Editar </button>
            </li>
          ))
        ) : (
          <>
            {" "}
            <input onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleEdit(edit)}> Salvar </button>
          </>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
