import { useState, useEffect, useRef  } from "react"
import './chat.css'

const ChatComponent = ({ messageList, onSend, disabled }) => {

    const [input, setInput] = useState('');
    const endOfMessagesRef = useRef(null);

    const handleSend = () => {
        if (input.trim() === '') return;

        // const newMessage = {
        //     text: input,
        //     direction: 0  // 사용자가 보낸 메시지
        // };

        // setMessageList(prev => [...prev, newMessage]);
        onSend(input)
        setInput('');
    };

    // 🔽 스크롤 맨 아래로 이동
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messageList.map((msg, index) => (
                    <div
                        key={index}
                        className={`chat-message ${msg.direction === 1 ? 'left' : 'right'}`}
                    >
                        {msg.text}
                    </div>
                ))}
                <div ref={endOfMessagesRef} />
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    disabled={disabled}
                    placeholder={disabled ? "Loading..." : "Type a message..."}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatComponent;