import "./style/user.css";
import { GrNext } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { IoHelpCircleSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const gmail = localStorage.getItem("gmail");
  const logo = name.charAt(0).toUpperCase();

  const logOut = () => {
    const confrom = window.confirm("⚠️Your all data and tasks will be permanently deleted \n \n  Do you really want to logout?")

    if(confrom){
      localStorage.clear();
      alert("✅ You have been logged out");
      // window.close();
      navigate("/login")

    }
  }
  return (
    <div className="user1">
      <div className="main_div">
        <div className="img">
          <div className="photo"></div>
          <div className="logo2">{logo}</div>
          <div className="name1">{name}</div>
          <div className="gmail1">{gmail}</div>
        </div>
        <br></br>
        <hr />
        <div className="change">
          <Link to="/edit" className="link">
            <div className="edit">
              <FaExchangeAlt style={{ marginRight: "9px", marginTop: "2px" }} />
              Edit account{" "}
              <GrNext
                style={{ marginTop: "2px", position: "absolute", right: "3%" }}
              />
            </div>
          </Link>
          <Link to="/usermanual" className="link">
            <div className="edit">
              <IoHelpCircleSharp
                style={{
                  marginRight: "5px",
                  marginTop: "0px",
                  fontSize: "20px",
                  marginLeft: "-3px",
                }}
              />
              Help & Support{" "}
              <GrNext
                style={{ marginTop: "2px", position: "absolute", right: "3%" }}
              />
            </div>
          </Link>
          <div className="edit" onClick={logOut}>
            <FaSignOutAlt style={{ marginRight: "5px", marginTop: "2px" }} />
            Logout{" "}
            <GrNext
              style={{ marginTop: "2px", position: "absolute", right: "3%" }}
            />
          </div>
          <a
            href="https://sunil-pradhan04.github.io/My-DETELS/"
            className="link"
          >
            <div className="host1">
              <p style={{ width: "100%" }}>Built by 💝Sunil</p>
              <p>About</p>
            </div>
          </a>
        </div>
      </div>
    </div>  
  );
};
export default User;
