import React from 'react'

const ChatForm = () => {
  return (
    <div>
      <form action="#" className="chat-form">
  <input type="text" placeholder="Type your message..." className="message-input"  required/>
  <button type="submit" className="material-symbols-rounded border-2 rounded-lg">
arrow_upward
</button>
</form>
    </div>
  )
}

export default ChatForm;
