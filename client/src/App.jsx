import "./App.css";
import AuthPage from "./Pages/AuthPage";
import { Route, Routes } from "react-router-dom";
// import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<AuthPage/>} />
      {/* <Route path="/chats" element={<Chatpage />} /> */}
      </Routes>
    </div>
  );
}

export default App;