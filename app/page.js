import AddTodo from "./addTodo";
import TodoListing from "./todoListing";
export default function Page() {
  return (
    //Input Button
    <div>
      <section className="container p-3 bg-emerald-500-500 mx-auto">
        <AddTodo />
        <TodoListing />
      </section>
    </div>
  );
}
