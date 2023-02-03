import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/quiz" element={<Quiz1 />}></Route>
        <Route path="/quiz2" element={<Quiz2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
