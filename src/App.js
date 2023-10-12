import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import SignIn from "./routes/SignIN/SignIn";
import Home from "./routes/home/Home";


function App() {
   useEffect(() => {
      console.log(window.innerHeight, window.innerWidth);
   });
   return (
      <Routes>
         <Route path="/" element={<SignIn />} />
         <Route path="/home" element={<Home />} />
      </Routes>
   );
}

export default App;
