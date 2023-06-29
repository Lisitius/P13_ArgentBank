import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import User from "../pages/user/User";

const routeFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  );
};

export default routeFile;
