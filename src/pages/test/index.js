import { useState } from "react"
import axios from 'axios'

import ChatComponent from "../../components/ChatComponent/ChatComponent"

import { api_url } from '../../modules/constants';


const ChatUITest = () => {

    const [loading, setLoading] = useState(false)

    const [messageList, setMessageList] = useState([
        {
            text: '안녕하세요. Wine Chat Bot "Tell Me Wine." 입니다^^',
            direction: 1
        }
    ])

    const sendCommened = async (text) => {

        if (text === "") {
            return;
        }

        setMessageList(prev => [...prev,
        {
            text: text,
            direction: 0
        }])

        try {

            setLoading(true)

            const messages = messageList
                .filter((msg, index) => {
                    return index !== 0
                })
                .map((msg) => {
                    return {
                        role: msg.direction === 0 ? "user" : "assistant",
                        content: msg.text
                    }
                });

            messages.push({
                role: "user",
                content: text
            })
            console.log(messages)

            const response = await axios.post(`${api_url}/deepseek`, {
                messages: messages
            })
            console.log(response)

            setMessageList(prev => [...prev,
            {
                text: response.data.result,
                direction: 1
            }
            ])

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (<>
        <h3>Test</h3>
        <div style={{width: '400px'}}>
            <ChatComponent messageList={messageList}
                disabled={loading}
                onSend={(msg) => {
                    sendCommened(msg)
                }} />
        </div>
    </>)
}

export default ChatUITest;