import React from 'react';

import "./assets/bootstrap.min.css";
import "./assets/all.min.css";
import "./app.css";

import Views from "./views/Views";
import UserContext from "./context/UserContext";

function App() {


  return (
      <UserContext>
        <Views />
      </UserContext>
  );
}

export default App;