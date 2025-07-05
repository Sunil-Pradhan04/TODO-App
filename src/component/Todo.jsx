import "./style/todo.css";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { contextData } from "../data/context_data";
import { MdOutlineCreditScore } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Todo = ({ item }) => {
  const {
    vital,
    setVital,
    deletItem,
    Done,
    handleOnGoing,
    onGoing,
    newData,
    complite,
  } = useContext(contextData);
  const handleVital = (id) => {
    setVital((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [id, ...prev];
      }
    });
  };
  const [start, setStart] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    if (newData.includes(item)) {
      setStart("Not Complited");
      setColor("red");
    } else if (onGoing.includes(item)) {
      setStart("in Progress");
      setColor("blue");
    } else if(complite.includes(item)){
      setStart("Complited");
      setColor("green")
    }
  }, [onGoing, newData, complite]);
  return (
    <div className="todo">
      <div className="type">{item.type}</div>
      <div className="delet" onClick={() => deletItem(item)}>
        <MdDeleteForever />
      </div>

      <div className="date2">
        <h2>{item.time}</h2>
        <h2>{item.date}</h2>
      </div>
      <div className="tit">{item.name}</div><hr />
      {/* <div className="type">{item.type}</div> */}
      <div className="description">{item.description}</div>
      <div className="but">
        <div className="impo" onClick={(e) => handleVital(item.id)}>
          {!vital.includes(item.id) ? (
            <span style={{ display: "flex" }}>
              <MdOutlineNotificationImportant style={{ marginRight: "2px" }} />
              Important
            </span>
          ) : (
            <span style={{ display: "flex" }}>
              <MdOutlineCreditScore style={{ marginRight: "2px" }} />
              Remove
            </span>
          )}
        </div>
      </div>
      <div className="complite">
        <p style={{ fontSize: "10px", display: "flex" }}>
          Sataus :{" "}
          <span style={{ color: color, marginLeft: "2px" }}>{start}</span>
        </p>
        {newData.includes(item) ? <div className="progress" onClick={() => handleOnGoing(item)}>
          Start
          <MdNavigateNext style={{ marginTop: "2px", fontSize: "20px" }} />
        </div> : 
        <div className="progress" onClick={() => Done(item)}>Done <MdNavigateNext style={{ marginTop: "2px", fontSize: "20px" }} /></div>
        }
      </div>
    </div>
  );
};
export default Todo;
