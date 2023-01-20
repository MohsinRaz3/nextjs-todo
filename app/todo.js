"use client";
// update function
// fetch ( id and isDone ) param || mode: no-cors || rewrites config.json ||
// onChange function || onClick function

import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  await fetch(`http://localhost:3002/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
      />

      {todo.name}
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </div>
  );
}
