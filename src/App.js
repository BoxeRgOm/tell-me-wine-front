import ChatBot from "./pages/chatbot";
import Admin from "./pages/admin";
import Feedback from "./pages/feedback";

import { Routes, Route, Link } from "react-router-dom";

import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatBot />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>

  );

  // useEffect(()=>{
  //   console.log('App')
  // },[])

  // return (
  //   <>
  //     <ChatBot />
  //   </>
  // ) 
}


export default App;
