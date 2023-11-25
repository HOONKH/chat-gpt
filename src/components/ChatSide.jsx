import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList, setChatList }) => {
  return (
    <ul className=" rounded-l-md p-4 font-bold w-52 text-[12px] animate_bounceIn pl-4 bg-gray-600 text-gray-300 z-10 ">
      {chatList?.map((v, i) => (
        <ChatSideCard
          key={i}
          question={v.question}
          answer={v.answer}
          setChatList={setChatList}
          chatList={chatList}
        />
      ))}
    </ul>
  );
};
export default ChatSide;
