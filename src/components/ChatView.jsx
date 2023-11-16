import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  return (
    <div className=" h-screen max-w-[560px] flex flex-col justify-end bg-gray-500">
      <ul className=" mb-20 overflow-y-auto whitespace-pre-wrap">
        {chatList.length === 0
          ? "채팅이 없습니다"
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
