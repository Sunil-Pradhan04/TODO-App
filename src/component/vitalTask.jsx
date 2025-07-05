import { useContext } from "react";
import { contextData } from "../data/context_data";
import Todo from "./Todo";

const Vital = () => {
  const { newData, vital , complite , onGoing } = useContext(contextData);
  const Final = [...newData , ...complite , ...onGoing];
  return (
    <>
    <h4 style={{margin : "0px 10px"}}>Important tasks build important outcomes💎. Start now🕐 <hr /></h4>
      <div className="data1">
        {!vital[0] ? (
          <h3>No important Task Avalable for You</h3>
        ) : (
          Final.map((item) =>
            vital.includes(item.id) ? <Todo key={item.id} item={item} /> : null
          )
        )}
      </div>
    </>
  );
};
export default Vital;
