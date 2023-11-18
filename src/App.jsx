import "animate.css";
import { useEffect, useState } from "react";
import ChatBar from "./components/ChatBar";
import ChatView from "./components/ChatView";
import ChatSide from "./components/ChatSide";
import LocalAnswer from "./components/LocalAnswer";

const App = () => {
  const [prevAnswer, setPrevAnswer] = useState([]);

  const getChatList = () => {
    const localChatList = localStorage.getItem("questions");

    if (!localChatList) return;

    const parsedChatList = JSON.parse(localChatList);

    setPrevAnswer(parsedChatList);
  };
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    getChatList();
    console.log(prevAnswer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="absolute">
        <img
          className="fixed rounded-xl h-[920px]"
          src="./images/money.jpg"
          alt="money"
        />
      </div>
      <div className=" min-h-screen max-w-screen-md mx-auto flex border-none">
        <ChatSide chatList={chatList} />
        <div className="grow flex flex-col relative">
          <ChatView chatList={chatList} />
          <ChatBar chatList={chatList} setChatList={setChatList} />
        </div>

        <div className="z-50 gap-2 mb-2 flex flex-col justify-end max-h-screen items-end max-w-screen ">
          {prevAnswer.map((v, i) => {
            return <LocalAnswer key={i} prevAnswer={v} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
