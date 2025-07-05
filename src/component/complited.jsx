import { useContext } from "react";
import { contextData } from "../data/context_data";
import Todo from "./Todo";

const Complited = () => {
  const {complite} = useContext(contextData);
  return(
    <>
    <h3 style={{margin : "0px" , marginLeft : "10px"}}>Congracts🤝 you have complited these Task<hr /></h3>
    <div className="data1">
      
    {complite.length !== 0 ? complite.map((item) => <Todo key={item.id} item={item} />) : <h4>Go back and complite your Task</h4>}
    </div>
    </>
  )
}
export default Complited;