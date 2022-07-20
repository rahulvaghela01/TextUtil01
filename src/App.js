// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

import React, { useState } from "react";
// import { BrowserRouter as Router,  Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils0.1 Dark Mode";
    } else {
      setMode("dark");
      document.body.Style.backgroundColor = "black";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils0.1 Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils0.1"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About us"
          aboutHome="Home"
          aboutContact="Contact us"
        />
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
