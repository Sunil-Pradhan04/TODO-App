import { useContext } from "react";
import { contextData } from "../data/context_data";
import Todo from "./Todo";

const OnGoing = () => {
  const { onGoing } = useContext(contextData);
  return (
    <>
    <h4 style={{margin : "0px 10px"}}>Do the work✅ --- result always follow effort💯 <hr /></h4>
      <div className="data1">
        {onGoing.length !== 0  ? onGoing.map((item) => (
          <Todo key={item.id} item={item} />
        )) : <h3>No task avalable. Start Now</h3>}
      </div>
    </>
  );
};
export default OnGoing;
