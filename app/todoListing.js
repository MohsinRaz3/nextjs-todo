import Todo from "./todo";
const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoListing() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div style={{ display: "block", margin: "auto", width: "50%" }}>
      <ul style={{ listStyleType: "none", padding: 15 }}>
        {todos.map((t) => {
          return (
            <li
              key={t.id}
              style={{ padding: "15px 0", display: "flex", background: "pink" }}
            >
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
