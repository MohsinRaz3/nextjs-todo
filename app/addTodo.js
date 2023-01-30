"use client";
import style from "../styles/page.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`https://todo-mock-api.vercel.app/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 font-bold text-emerald-900 whitespace-nowrap ">
        TODO-LIST{" "}
      </h1>

      <div className="flex space-between px-3 mb-5 ">
        <input
          className="bg-gray-50 border border-gray-300 text-emerald-800 py-3 mb-3 text-sm rounded-lg focus:ring-emerald-700 focus:border-blue-700 block w-auto p-2.5 dark:bg-gray-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-emerald-500"
          type="text"
          placeholder="Add Todo Here"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          className="mx-2 bg-emerald-500 px-3 mb-2 rounded-md"
          onClick={async () => {
            await addTodo(name, router.refresh);
            setName("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
