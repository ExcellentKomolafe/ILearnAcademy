import Home from "./components/Home";
import Question from "./components/Question";
import About from "./About";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const LS_REG_KEY = "register_key_v1";

function App() {
  const [registered, setRegistered] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LS_REG_KEY)) || false;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_REG_KEY, JSON.stringify(registered));
  }, [registered]);

  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden max-w-[98dvw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/question"
            element={
              <Question setRegistered={setRegistered} registered={registered} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/signup"
            element={<SignUp onRegistered={() => setRegistered(true)} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
