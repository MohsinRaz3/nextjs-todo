"use client";
import style from "../styles/page.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div className={style.addTodo}>
      <h1 className={style.heading}>TODO-LIST CHAKRA-UI</h1>
      <input
        type="text"
        placeholder="Add Todo Here"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
