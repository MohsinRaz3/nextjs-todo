import AddTodo from "./addTodo";
import TodoListing from "./todoListing";
import style from "../styles/page.module.css";
export default function Page() {
  return (
    //Input Button
    <div className={style.container}>
      <AddTodo />
      <TodoListing />
    </div>
  );
}
