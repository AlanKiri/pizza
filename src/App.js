import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Drive, News, Catalog, NotFound } from "./pages";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Drive-in" element={<Drive />} />
          <Route exact path="News" element={<News />} />
          <Route exact path="Catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
