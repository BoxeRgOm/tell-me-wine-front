import ChatBot from "./pages/chatbot";
import {Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ChatBot type={"openai"}/>}/>
      <Route path="/deepseek" element={<ChatBot type={"deepseek"}/>}/>
    </Routes>
  ) 
}


export default App;
