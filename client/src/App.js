import { Routes, Route } from "react-router-dom";
import Landing from "../src/components/Landing";
import Countries from "../src/components/Countries/Countries";
import Details from "../src/components/Countries/Details";
import Activities from "./components/Activities/Activities";
import ActivityDetails from "./components/Activities/ActivityDetails";
import CreateForm from "./components/Activities/CreateForm";
import About from "../src/components/About/About";
// import Loader from "../src/components/Loader";
import Error404 from "./components/Error404";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route exact strict path="/" element={<Landing />}></Route>
      <Route exact strict path="/home" element={<Countries />}></Route>
      <Route exact strict path="/countries/:id" element={<Details />}></Route>
      <Route exact strict path="/activities" element={<Activities />}></Route>
      <Route
        exact
        strict
        path="/activities/:id"
        element={<ActivityDetails />}
      ></Route>
      <Route
        exact
        strict
        path="/activities/create"
        element={<CreateForm />}
      ></Route>
      <Route exact strict path="/about" element={<About />}></Route>
      {/* <Route exact strict path="/loader" element={<Loader />}></Route> */}
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
