import React from 'react'
type Message = {
  role: "user" | "bot";
  text: string;
};
type ChatFormProps = {
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
};

const ChatForm = ({setChatHistory}: ChatFormProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        const userMessage = inputRef.current?.value.trim();
        if(!userMessage) return;
        inputRef.current && (inputRef.current.value = "");
// Update chat history with the user's message
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
        console.log(userMessage);
    };
  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
  <input ref={inputRef} type="text" placeholder="Type your message..." className="message-input"  required/>
  <button type="submit" className="material-symbols-rounded border-2 rounded-lg">
arrow_upward
</button>
</form>
    </div>
  )
}

export default ChatForm;
