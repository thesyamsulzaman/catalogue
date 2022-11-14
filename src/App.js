import "./index.css"
import { Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/:movieId" element={<Detail />} />
    </Routes>
  )
}

export default App;
