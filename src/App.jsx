import { Route, Routes } from "react-router-dom";
import Body from "./component/body";
import Login from "./component/login";
import ContextProvider from "./data/context_data";

const App = () => {
  const name = localStorage.getItem("name");
  return (
    <ContextProvider>
      <Routes>
        <Route path="*" element={name ? <Body /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/body" element={<Body />} />
        
      </Routes>
    </ContextProvider>
  );
};
export default App;