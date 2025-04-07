import {useState} from 'react'
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


const ChatBot = () => {

    const [messageList, setMessageList] = useState([{ 
        message: '안녕하세요. Wine Chat Bot "Tell Me Wine." 입니다^^',
        direction: 'incoming',
        position: 'first'}])

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
            const response = await axios.post(`${api_url}/recommend`, {
                userInput: text
            })
            console.log(response)
            
            setMessageList(prev => [...prev,
                { message: response.data.result,
                 direction: 'incoming',
                 position: 'normal'}
            ])

        }catch (error){
            console.error(error);
        }
    }

    return (<>
         <MainContainer style={{ 
            width: '100vw', 
            height: 360,
            margin: 'auto',
            position: 'fixed',
            top: 0, 
            left: 0,
             right: 0 
            }}>
            <ChatContainer>
                <MessageList>
                    {messageList.map((msg, i)=>{
                        return (
                        <Message model={msg}
                                key={i} />)
                    })}
            </MessageList>
            <MessageInput placeholder="메세지 작성"
                          onSend={(textContent)=>{
                            sendCommened(textContent)
                          }}
                          />
          </ChatContainer>
        </MainContainer>
    </>)
}

export default ChatBot;