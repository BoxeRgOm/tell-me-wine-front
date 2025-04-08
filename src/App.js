import ChatBot from "./pages/chatbot";
import Admin from "./pages/admin";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatBot/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  ) 
}


export default App;
