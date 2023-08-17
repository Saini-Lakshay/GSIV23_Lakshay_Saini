import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "../constants/routingData";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {paths.map((path, index) => {
          return path.isPublic ? (
            <Route
              key={index}
              path={path.path}
              element={<path.component />}
            ></Route>
          ) : (
            <span key={index}>
              Authenticated route, please setup user login state and login!
            </span>
          ); // can be checked through login via user login state
        })}
        <Route path="/*" element={<>Page not found!</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
