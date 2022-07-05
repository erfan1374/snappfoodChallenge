import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vendors from "./pages/Vendors";
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
          <Route path="*" element={<p>404 page</p>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
