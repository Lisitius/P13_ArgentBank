import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";

const routeFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
};

export default routeFile;
