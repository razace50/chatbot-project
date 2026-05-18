import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm";

const App = () => {
  const [chatHistory, setChatHistory] = React.useState([]);
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
            </div>
            <button className="material-symbols-rounded">
keyboard_arrow_down
</button>
          </div>
          {/* Chatbot body */}
          <div className="chat-body">
<div className="message bot-message">
  <ChatbotIcon />
  <p className="message-text">
    Hello Doctor!
  </p>
</div>
<div className="message user-message">
  <p className="message-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque distinctio fuga modi corporis optio debitis magni nulla assumenda aliquam minima.</p>
</div>
          </div>
          {/* Chatbot footer */}
          <div className="chat-footer">
<ChatForm setChatHistory={setChatHistory} />
          </div>
      </div>
      
    </div>
  )
}

export default App;
