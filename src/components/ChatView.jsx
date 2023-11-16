import { useEffect, useRef } from "react";
import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();
  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
  }, [chatList]);

  return (
    <div className=" h-screen max-w-[560px] flex flex-col justify-end rounded-r-md bg-gray-500">
      <ul
        ref={ulRef}
        className="font-black mb-20 overflow-y-auto whitespace-pre-wrap "
      >
        {chatList.length === 0
          ? "EMPTY"
          : chatList.map((v, i) => (
              <div>
                <ChatCard key={i} answer={v.answer} question={v.question} />
              </div>
            ))}
      </ul>
    </div>
  );
};
export default ChatView;
