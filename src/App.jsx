import "animate.css";
import { useEffect, useState } from "react";
import ChatBar from "./components/ChatBar";
import ChatView from "./components/ChatView";
import ChatSide from "./components/ChatSide";

const App = () => {
  const getChatList = () => {
    const localChatList = localStorage.getItem("questions");

    if (!localChatList) return;

    const parsedChatList = JSON.parse(localChatList);

    setChatList(parsedChatList);
  };
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    getChatList();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative flex">
      <div className="absolute">
        <img
          className="fixed rounded-xl  h-[920px]"
          src="./images/money.jpg"
          alt="money"
        />
      </div>
      <div className=" min-h-screen max-w-screen-md mx-auto flex border-none">
        <ChatSide chatList={chatList} />
        <div className=" flex flex-col relative">
          <ChatView chatList={chatList} />
          <ChatBar chatList={chatList} setChatList={setChatList} />
        </div>
      </div>
    </div>
  );
};

export default App;
