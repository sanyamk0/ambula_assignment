import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  HomePage,
  AboutPage,
  ContactPage,
  ToDoListPage,
  ShoppingCartPage,
  WeatherWidget,
} from "./components/index";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/todo-list" element={<ToDoListPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/weather-widget" element={<WeatherWidget />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
