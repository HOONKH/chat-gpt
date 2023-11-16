import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <ul className=" rounded-l-md p-4 font-bold w-52 text-[13px] animate_bounceIn pl-4 bg-gray-600 text-gray-300">
      {chatList?.map((v, i) => (
        <ChatSideCard key={i} question={v.question} answer={v.answer} />
      ))}
    </ul>
  );
};
export default ChatSide;
