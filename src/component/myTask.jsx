import { useContext } from "react";
import { contextData } from "../data/context_data";
import Todo from "./Todo";

const MyTask = () => {
  const { newData, onGoing, complite } = useContext(contextData);
  const newArr = [...newData , ...onGoing , ...complite];
  return (
    <>
      <div className="my">
        <h2>Welcome Back ❤️</h2>
        <div className="sec">
          Small steps every day lead to big result --- Start now, not later{" "}
          <hr />
        </div>
      </div>
      <div className="data1">
        {newArr.length !== 0 ? newArr.map((item) => (
          <Todo key={item.id} item={item} />
        )) : <h3>No task avalable. Add task for Start</h3>}
      </div>
    </>
  );
};
export default MyTask;
