import Todo from "./todo";
const getTodos = async () => {
  let todos = await fetch("https://todo-mock-api.vercel.app/api/todo/list");
  return todos.json();
};

export default async function TodoListing() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul className="bg-emerald-200 rounded-md flex-auto">
        {todos.map((t) => {
          return (
            <li className="mx-3 py-1" key={t.id}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
