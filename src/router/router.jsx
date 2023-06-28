import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const routeFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default routeFile;
