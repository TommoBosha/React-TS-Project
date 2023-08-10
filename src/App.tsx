import React, { FC} from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PizzaPage from "./pages/JewelryPage";


const App: FC = () => {
  

  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jewelry/:id" element={<PizzaPage/>} />
        </Routes>
       
      </div>
    </div>
  );
};

export default App;
