import "./styles.css";
import React, { useState } from "react";
import ThemeContext from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";

export default function App() {
  const [isLight, setIsLight] = useState(true);
  const changeTheme = () => {
    setIsLight((prevState) => {
      return !prevState;
    });
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isLight, changeTheme }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
