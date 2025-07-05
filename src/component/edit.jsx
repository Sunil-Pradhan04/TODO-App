import { useRef } from 'react';
import './style/edit.css'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const nameRef = useRef()
  const emailRef = useRef()
  const Lname = localStorage.getItem("name")
  const Lemail = localStorage.getItem("gmail")
  const handleChange = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    name ? localStorage.setItem("name" , name) : localStorage.setItem("name" , Lname);
    email ? localStorage.setItem("gmail" , email): localStorage.setItem("gmail" , Lemail);
    navigate("/user")
  }
  return(
    <div className="user1">
      <div className="main_div">
       <form>
        <span>Name</span>
        <input type="text" placeholder='Enter new name' ref={nameRef}/>
        <span>Email</span>
        <input type='email' placeholder='Enter new email' ref={emailRef}/>
        <button type='submit' onClick={handleChange}>Change</button>
       </form>
      </div>
    </div>
  )
}
export default Edit;