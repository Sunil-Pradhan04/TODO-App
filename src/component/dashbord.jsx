import { use, useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { contextData } from "../data/context_data";
import Not from "./notAvel";
import "./style/dashbord.css";
import { BiTask } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashbord = () => {
  const { newData, complite, onGoing } = useContext(contextData);
  const name = localStorage.getItem("name");
  const Fname = name?.split(" ");
  const firstName = Fname ? Fname[0] : "User";

  const newArr = [...newData, ...complite, ...onGoing];
  const len1 = newArr.length;
  const NC_len = newData.length;
  const NC_P = (NC_len / len1) * 100;
  const FNC_P = Math.trunc(NC_P * 10) / 10;
  const IP_len = onGoing.length;
  const IP_P = (IP_len / len1) * 100;
  const FIP_P = Math.trunc(IP_P * 10) / 10;
  const C_len = complite.length;
  const C_P = (C_len / len1) * 100;
  const FC_P = Math.trunc(C_P * 10) / 10;

  const [start, setStart] = useState(false);
  const [second, setSecond] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [hr, setHr] = useState(0);

  const handleStop = () => {
    setStart(!start);
    setSecond(second + 1);
  };
  const handleReset = () => {
    setSecond(0);
    setMinuts(0);
    setHr(0);
  };
  useEffect(() => {
    if (start === true) {
      setTimeout(() => {
        if (second < 60) {
          setSecond(second + 1);
        } else {
          setSecond(0);
          setMinuts(minuts + 1);
        }
        if (minuts > 59) {
          setMinuts(0);
          setHr(hr + 1);
        }
      }, 1000);
    }
    // console.log(hr + ":" + min uts + ":" + second);
  }, [second]);
  const one = (1 / 60) * 100;
  const pre = second * one;
  const arrayA = newData.slice(0, 1);
  const arrayB = onGoing.slice(0, 1);

  return (
    <>
      <div className="dashbord">
        <div className="h">
          <h2>
            Hii{" "}
            <span style={{ color: "blue", marginLeft: "5px" }}>
              {firstName} 👋
            </span>
            !
          </h2>
          <h4>Organize today . Achive tomorrow</h4>
          <div className="h1">Your day, your tasks, your flow</div>
        </div>
        <div className="data1">
          <div className="child">
            <div className="status">
              <p>
                <BiTask />
                <span style={{ marginLeft: "3px", color: "rgb(235, 90, 17)" }}>
                  Task Status
                </span>
                <Link to="/myTask" className="link">
                  <span style={{ marginLeft: "130px", fontSize: "14px" }}>
                    ✍️Total : {len1}
                  </span>
                </Link>
              </p>

              <div className="leble">
                <div className="all">
                  <div
                    className="circle"
                    style={{
                      background: `conic-gradient(red 0% ${FNC_P}%, #eee ${FNC_P}% 100%)`,
                    }}
                  >
                    <div className="over">{FNC_P}%</div>
                  </div>
                  <p>
                    <span
                      style={{
                        fontSize: "10px",
                        marginRight: "2px",
                        color: "Red ",
                      }}
                    >
                      <FaDotCircle />
                    </span>
                    Not Complited
                  </p>
                </div>
                <div className="all">
                  <div
                    className="circle"
                    style={{
                      background: `conic-gradient(blue 0% ${FIP_P}%, #eee ${FIP_P}% 100%)`,
                    }}
                  >
                    <div className="over">{FIP_P}%</div>
                  </div>
                  <p>
                    <span
                      style={{
                        fontSize: "10px",
                        marginRight: "2px",
                        color: "blue",
                      }}
                    >
                      <FaDotCircle />
                    </span>
                    On Progress
                  </p>
                </div>
                <div className="all">
                  <div
                    className="circle"
                    style={{
                      background: `conic-gradient(green 0% ${FC_P}%, #eee ${FC_P}% 100%)`,
                    }}
                  >
                    <div className="over">{FC_P}%</div>
                  </div>
                  <p>
                    <span
                      style={{
                        fontSize: "10px",
                        marginRight: "2px",
                        color: "green",
                      }}
                    >
                      <FaDotCircle />
                    </span>
                    Complited
                  </p>
                </div>
              </div>
            </div>
            <div className="stopWatch">
              <p>Stop Watch</p>
              <div className="watchSec">
                <div
                  className="watch"
                  style={{
                    background: `conic-gradient(blue 0% ${pre}%, #eee ${pre}% 100%)`,
                  }}
                >
                  <div className="timer">
                    {hr + ":" + minuts + ":" + second}
                  </div>
                </div>
              </div>
              <div className="controls">
                <button className="cont" onClick={handleStop}>
                  {!start ? "Start" : "Stop"}
                </button>
                {!start ? (
                  <button className="cont" onClick={handleReset}>
                    Reset
                  </button>
                ) : (
                  <button className="cont inActive">Reset</button>
                )}
              </div>
            </div>
          </div>
          <div className="child">
            {arrayA.map((item) => (
              <Todo key={item.id} item={item} />
            ))}
            {arrayB.map((item) => (
              <Todo key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashbord;
