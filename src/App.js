import React from "react";
import "./App.css";
import UrlEncoderDecoder from "./UrlEncoderDecoder";

function App() {
  return (
    <div className="App">
      <UrlEncoderDecoder />

      <footer>
        &copy; <a href="https://akihiro.dev">akihiro.dev</a> -{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
