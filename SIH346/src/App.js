import Home from './Components/Home'
import { Routes, Route } from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Recommend from './Components/Recommend';
import Notestate from './Components/context/notes/Notestate';
import Dosha from './Components/dosha';
import Diet from './Components/Diet';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Chatpage from './Components/Chatpage';
import Appointment from './Components/Appointment';
// import 'style.css';
function App() {
  return (
    <>
    <Notestate>
      
    <Router>
      <Routes>
      {/* <Navbar/> */}
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/dosha" element={<Dosha/>}></Route>
        <Route exact path="/diet" element={<Diet/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>
    </Router>
    </Notestate>
    </>

  );
}

export default App;
