import "./style/sidebar.css";
import { MdDashboard } from "react-icons/md";
import { MdNotificationImportant } from "react-icons/md";
import { LuClipboardPen } from "react-icons/lu";
import { MdDoneOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { contextData } from "../data/context_data";
import { MdNavigateNext } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa6";

const Sidebar = () => {
  const { show } = useContext(contextData);

  const location = useLocation();
  const name = localStorage.getItem("name");
  const gmail = localStorage.getItem("gmail");
  const first = name.charAt(0).toUpperCase();
  return (
    <div className="sidebar" style={{ display: show ? "block" : "none" }}>
      <div className="head">
        {name ? (
          <>
            <div className="logo">{first}</div>
            <div className="data">
              <ul>
                <li>{name}</li>
                <li style={{ opacity: "0.8" , fontSize : "12px"}}>{gmail}</li>
              </ul>
            </div>
          </>
        ) : null}
      </div>

      <Link to="/" className="link">
        <div className={location.pathname === "/" ? "active page" : "page"}>
          <MdDashboard style={{ fontSize: "25px", marginRight: "7px" }} />
          Dashbord
        </div>
      </Link>
      <Link to="/Vital" className="link">
        <div
          className={location.pathname === "/Vital" ? "active page" : "page"}
        >
          <MdNotificationImportant
            style={{ fontSize: "25px", marginRight: "7px" }}
          />
          Vital Task
        </div>
      </Link>
      <Link to="/myTask" className="link">
        <div
          className={location.pathname === "/myTask" ? "active page" : "page"}
        >
          <LuClipboardPen style={{ fontSize: "25px", marginRight: "7px" }} />
          My Task
        </div>
      </Link>
      <Link to="/OnGoing" className="link">
        <div
          className={location.pathname === "/OnGoing" ? "active page" : "page"}
        >
          <FaHourglassStart  style={{ fontSize: "25px", marginRight: "7px" }} />
          In Progress
        </div>
      </Link>
      <Link to="/complited" className="link">
        <div
          className={
            location.pathname === "/complited" ? "active page" : "page"
          }
        >
          <MdDoneOutline style={{ fontSize: "25px", marginRight: "7px" }} />
          Complited
        </div>
      </Link>

      <a href="https://sunil-pradhan04.github.io/My-DETELS/" className="link">
        <div className="host">
          <p style={{fontSize : "14px"}}> Devloped by Sunil</p>
          <p style={{ fontSize: "13px", marginRight: "0px", marginTop: "1px" }}>
            About
          </p>
          <MdNavigateNext style={{ marginTop: "-2px", fontSize: "20px" }} />
        </div>
      </a>
    </div>
  );
};
export default Sidebar;
