import React from "react";
import Navbar from "./components/Navbar";
const links = ["Product", "OverView", "Pricing", "Contact us"];

function App() {
  return (
    <div>
      <Navbar links={links} />
    </div>
  );
}

export default App;
