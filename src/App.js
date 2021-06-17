import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
/*import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'*/
import Product from './view/Product'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
      

        <div className="p-3">
        <Routes>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
