import { useContext, useEffect, useState } from "react";
import "./style/header.css";
import { IoAddCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contextData } from "../data/context_data";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const {show , setShow} = useContext(contextData);

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const date1 = date.toLocaleDateString();
  const time = date.toLocaleTimeString();
  return (
    <header>
      <div className="name">
        <div className="show" onClick={() => setShow(!show)}>{show ? <ImCross /> :<FaBars />}</div>
        <p>
          TO-DO<span style={{ color: "black" }}> App</span>
        </p>
      </div>
      <div className="right">
        <Link to="/add" className ="link"><div className="add"><IoAddCircle /></div></Link>
        <Link to="/user" className ="link"><div className="user"><FaUserCircle /></div></Link>
        <div className="date">
          <p
            style={{
              color: "rgba(210, 28, 61, 0.8)",
              fontFamily: "arial black",
            }}
          >
            {date1}
          </p>
          <p style={{ fontFamily: "anton" }}>{time}</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
