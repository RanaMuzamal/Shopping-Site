import React from "react";
import Header from "./components/header";
import Drawer from "./components/drawer"
import Products from "./components/Products/Products";
function App() {
 return (
  <div className="App">
   <Header />
   <Drawer />
   <Products />
  </div>
 );
}

export default App;
