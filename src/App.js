import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <a
            href="https://www.shecodes.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./logo.png" alt="logo" />
          </a>
        </header>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Shaghayegh K.
          </a>{" "}
          and is{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
