import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vendors from "./pages/Vendors";
import NotFoundPage from "./components/NotFoundPage";
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive={false}
            element={<Vendors/>}
          ></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
