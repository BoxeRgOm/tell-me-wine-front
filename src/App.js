import ChatBot from "./pages/chatbot";
import Admin from "./pages/admin";
import FeedBack from "./pages/feedback";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatBot/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/feedback" element={<FeedBack/>}/>
    </Routes>
  ) 
}


export default App;
