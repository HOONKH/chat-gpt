import "animate.css";
import { useState } from "react";
import ChatBar from "./components/ChatBar";
import ChatView from "./components/ChatView";
import ChatSide from "./components/ChatSide";

const App = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className=" min-h-screen max-w-screen-md mx-auto flex border-none">
        <ChatSide chatList={chatList} />
        <div className="grow flex flex-col relative">
          <ChatView chatList={chatList} />
          <ChatBar chatList={chatList} setChatList={setChatList} />
        </div>
      </div>
    </div>
  );
};

export default App;
