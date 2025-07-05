import { useEffect, useState } from "react";
import "./style/body.css";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Routes } from "react-router-dom";
import Dashbord from "./dashbord";
import Vital from "./vitalTask";
import MyTask from "./myTask";
import Complited from "./complited";
import Add from "./add";
import OnGoing from "./onGoing";
import User from "./user";
import Edit from "./edit";
import UserManual from "./userManul";

const Body = () => {
  return (
    <>
      <Header />
      <div className="body">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element = {<Dashbord />} />
            <Route path="/Vital" element={<Vital />} />
            <Route path="/myTask" element={<MyTask />} />
            <Route path="/OnGoing" element={<OnGoing />} />
            <Route path="/complited" element={<Complited />} />
            <Route path="/user" element={<User />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/usermanual" element={<UserManual />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Body;
