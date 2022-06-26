import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import TeamPage from './Components/Navbar/Section/Team/Team'
import Page2 from "./Components/Navbar/Section/Page2/Page2"
import UpperSection from './Components/Navbar/Section/Page1/Page1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("dark");
  const darkModeToggle = () => {
    if (mode === "light") {
      setMode("dark");
      setText("light");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
      document.body.style.transition = "all 0.3s ease";
    } else {
      setMode("light");
      setText("dark");
      document.body.style.backgroundColor = "#f8f9f4";
      document.body.style.color = "#000";
      document.body.style.transition = "all 0.3s ease-in-out";
    }
  };
  return (
    <>
      <BrowserRouter>
      <Navbar mode={mode} darkModeToggle={darkModeToggle} text={text}/>
        <Routes>
          <Route
            path="/"
            element={<UpperSection />}
          />
          <Route path="/projects" element={<Page2 />}/>
          <Route path="/team" element={<TeamPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
