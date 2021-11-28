import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [islogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            islogged ? (
              <Profile setIsLogged={setIsLogged} />
            ) : (
              <Login setIsLogged={setIsLogged} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
