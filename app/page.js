import AddTodo from "./addTodo";
import TodoListing from "./todoListing";

export default function Page() {
  return (
    //Input Button
    <div>
      <AddTodo />
      <TodoListing />
    </div>
  );
}
