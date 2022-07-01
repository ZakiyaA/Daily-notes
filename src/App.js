import React from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Input } from "./components/Input.jsx";


function App() {
  return (
    <div className="App">
       <div className="container">
     <Header />
     <Input />
     <Footer />
    </div>
    </div>
  );
}

export default App;
