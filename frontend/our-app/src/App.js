import "./components/background.css"
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import Text from "./Pages/Text"
import Call from "./Pages/Call"

function App() {
  return (
    <div className='backgrounds'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/text" element={<Text/>} />
        <Route path="/call" element={<Call/>} />
      </Routes>
    </div>
  );
}

export default App;
