import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Issues from "./pages/Issues";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues/:repoInfo" element={<Issues />} />
      </Routes>
    </Router>
  );
}

export default App;
