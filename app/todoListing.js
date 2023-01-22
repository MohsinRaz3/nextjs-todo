import Todo from "./todo";
const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoListing() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
