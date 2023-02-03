import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import ForYoupage from "./pages/ForYoupage";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homepage />}></Route> */}
        <Route path="/foryou" element={<ForYoupage />}></Route>
        <Route path="/quiz" element={<Quiz1 />}></Route>
        <Route path="/quiz2" element={<Quiz2 />}></Route>
        <Route path="/quiz3" element={<Quiz3 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
