import { useRef } from "react";
import "./style/login.css";
import { FaUserAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdStart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getFirestore , collection , addDoc } from "firebase/firestore";
import {app} from "../firebase"


const firestore = getFirestore(app);
const Login = () => {
  const navigate = useNavigate();
  const getName = useRef();
  const getGmail = useRef();
  const name = "";
  const gmail = "";
  const onSubmit = (e) => {
    e.preventDefault();
    if (getName.current.value === "" || getGmail.current.value === "") {
      alert("Please fill all the fields");
    } else {
      localStorage.setItem("name", getName.current.value);
      localStorage.setItem("gmail", getGmail.current.value);
      // window.location.href = "*";
      addDoc(collection(firestore , 'Users' ), {
        name : getName.current.value,
        email : getGmail.current.value,
      });
      // navigate("/home//");
      navigate('/body');
    }
  }
  return (
    <div className="login">
      <form>
        <h2>Welcome</h2>
        <div className="field">
          <div className="title"><FaUserAlt style={{marginRight : "5px"}}/>User Name</div>
        <input type="text" placeholder="Username" className="login-input" ref={getName} required/>
        </div>
        <div className="field">
          <div className="title"><BiLogoGmail style={{marginRight : "5px"}} />Gmail</div>
        <input type="email" placeholder="Gmail" className="login-input" ref={getGmail} required/>
        </div>
        <button type="submit" onClick={onSubmit} className="button">Start <MdStart style={{marginLeft : "5px" , fontSize : "20px"}}/></button>
      </form>
    </div>
  );
};
export default Login;
