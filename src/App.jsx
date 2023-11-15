import "animate.css";
import { useState } from "react";
import ChatBar from "./components/ChatBar";
import ChatView from "./components/ChatView";

const App = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <div className=" min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-white-200 border-2 rounded-md w-52 animate_bounceIn">
        Record
      </div>
      <div className="grow flex flex-col">
        <ChatView chatList={chatList} />
        <ChatBar chatList={chatList} setChatList={setChatList} />
      </div>
    </div>
  );
};

export default App;
