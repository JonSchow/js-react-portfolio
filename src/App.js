import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
