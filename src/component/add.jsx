import { useContext, useRef } from "react";
import "./style/add.css";
import { contextData } from "../data/context_data";
import { Navigate, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const { setNewData } = useContext(contextData);
  const name = useRef();
  const date = useRef();
  const time = useRef();
  const type = useRef();
  const description = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const date1 = date.current.value;
    const time1 = time.current.value;
    const name1 = name.current.value;
    const type1 = type.current.value;
    const description1 = description.current.value;
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: name1,
      date: date1,
      time: time1,
      type: type1,
      description: description1,
    };
    // console.log(newTask);
    setNewData((prev) => {
      return [newTask, ...prev];
    });
    name.current.value = "";
    date.current.value = "";
    time.current.value = "";
    type.current.value = "";
    description.current.value = "";
    navigate("/myTask");
  };
  return (
    <div className="add2">
      <div className="add1">
        <h1>Add Task</h1>
        <form>
          <div className="field2">
            <span>Enter your task name</span>
            <input type="text" placeholder="Task Name" required ref={name} />
          </div>
          <div className="field2">
            <span>Enter Your date and time for task</span>
            <div className="dt">
              <input type="date" className="dt1" ref={date} />
              <input type="time" className="dt1" ref={time} />
            </div>
          </div>
          <div className="field2">
            <span>Select Your task Type</span>
            <select className="select" ref={type}>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
              <option value="Play">Play</option>
              <option value="Entertenment">Entertenment</option>
              <option value="office">office</option>
              <option value="health">health</option>
              <option value="Excersize">Excersize</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="field2">
            <span>Enter Your description</span>
            <input
              type="text"
              placeholder="Description"
              required
              ref={description}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            {" "}
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};
export default Add;
