import {useEffect, useState} from 'react'
import axios from 'axios';

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput
  } from '@chatscope/chat-ui-kit-react';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import '../../styles/chat.css';
import { api_url } from '../../modules/constants';


const ChatBot = ({type='openai'}) => {
    
    const [loading, setLoading] = useState(false)

    const [messageList, setMessageList] = useState([
        { message: '안녕하세요. Wine Chat Bot "Tell Me Wine." 입니다^^',
          direction: 'incoming',
          position: 'first'}])

    // useEffect(()=>{
    //     setMessageList([...messageList,
    //         { message: `Change AI Model : ${type}`,
    //           direction: 'incoming',
    //           position: 'normal'}
    //     ])
    // },[type, setType])

    const sendCommened = async (text) => {

        if(text === ""){
            return;
        }

        setMessageList(prev => [...prev,
            { message: text,
             direction: 'outgoing',
             position: 'normal'}
        ])

        try{
            
            setLoading(true)

            const messages = messageList
            .filter((msg)=>{
                return msg.position !== "first"
            })
            .map((msg)=>{
                return { 
                    role: msg.direction === 'outgoing' ? "user" : "assistant", 
                    content: msg.message }
            });
            
            messages.push({ 
                role: "user", 
                content: text })
            console.log(messages)

            const response = await axios.post(`${api_url}/${type}`, {
                messages: messages
            })
            console.log(response)
            
            setMessageList(prev => [...prev,
                { message: response.data.result,
                 direction: 'incoming',
                 position: 'normal'}
            ])

        }catch (error){
            console.error(error);
        }finally{
            setLoading(false)
        }
    }

    return (<>
        <h3>ChatBot {type === 'deepseek' && 'DeepSeek'}</h3>
        {/* <div>
            <button onClick={()=>{
                if(type==='deepseek'){
                    setType('openai')
                }
            }}>Open AI</button>
            <button onClick={()=>{
                if(type==='openai'){
                    setType('deepseek')
                }
            }}>DeepSeek</button>
        </div> */}
         <MainContainer style={{ 
                width: '100vw', 
                height: 360,
                overflow: 'hidden'
            }}>
            <ChatContainer>
                <MessageList>
                    {messageList.map((msg, i)=>{
                        return (
                        <Message model={msg}
                                key={i} />)
                    })}
            </MessageList>
            <MessageInput placeholder={loading ? "Loading..." : "Send a message..."}
                        disabled={loading}
                        onSend={(textContent)=>{
                            sendCommened(textContent)
                        }}
                    />
          </ChatContainer>
        </MainContainer>
    </>)
}

export default ChatBot;