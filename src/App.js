import ChatBot from "./pages/chatbot";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatBot/>}/>
    </Routes>
  ) 
}


export default App;
