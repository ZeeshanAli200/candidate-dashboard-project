import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Assets from "../pages/assets-dashboard/asset";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
