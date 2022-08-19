import { Routes, Route } from "react-router-dom";
import Landing from "../src/components/Landing";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* <div className="App"> */}
      {/* <h1>Santi's Countries</h1> */}
      <Route exact strict path="/" element={<Landing />}></Route>
      {/* </div> */}
    </Routes>
  );
}

export default App;
