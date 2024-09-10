import React, { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import ChallengeForm from "./components/ChallengeForm";

import HackathonDetails from "./pages/HackathonDetails";

import "./style/app.css";

import "./style/global.css";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import { HackathonProvider } from "./hackathonContex";

const App = () => {
  return (
    <HackathonProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-challenge" element={<ChallengeForm />} />

              <Route path="/hackathon/:id" element={<HackathonDetails />} />
              <Route path="/edit/:id" element={<ChallengeForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HackathonProvider>
  );
};

export default App;
