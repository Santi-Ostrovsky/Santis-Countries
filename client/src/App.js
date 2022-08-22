import { Routes, Route } from "react-router-dom";
import Landing from "../src/components/Landing";
import Countries from "../src/components/Countries/Countries";
import Details from "../src/components/Countries/Details";
import Activities from "./components/Activities/Activities";
import CreateForm from "./components/Activities/CreateForm";
import About from "../src/components/About/About";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* <div className="App"> */}
      {/* <h1>Santi's Countries</h1> */}
      <Route exact strict path="/" element={<Landing />}></Route>
      <Route exact strict path="/countries" element={<Countries />}></Route>
      <Route exact strict path="/countries/:id" element={<Details />}></Route>
      <Route exact strict path="/activities" element={<Activities />}></Route>
      <Route
        exact
        strict
        path="/activities/create"
        element={<CreateForm />}
      ></Route>
      <Route exact strict path="/about" element={<About />}></Route>

      {/* </div> */}
    </Routes>
  );
}

export default App;
