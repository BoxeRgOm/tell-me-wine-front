import {Routes, Route} from 'react-router-dom'

import ChatBot from "./pages/chatbot";
import Admin from "./pages/admin";
import FeedBack from "./pages/feedback";
import ChatUITest from "./pages/test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatBot type={'openai'}/>}/>
      <Route path="/deepseek" element={<ChatBot type={'deepseek'}/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/feedback" element={<FeedBack/>}/>
      <Route path="/test" element={<ChatUITest/>}/>
    </Routes>
  ) 
}


export default App;
