
import React from "react";
import './../styles/App.css';
import Cities from "./Cities";

const App = () => {
  return (
    <div>
        {/* Do no t remove the main div */}
        <p>Search cities of India:</p>
        <Cities />
        
    </div>
  )
}

export default App
