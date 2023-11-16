const ChatCard = ({ answer, question }) => {
  return (
    <li className=" flex flex-col gap-4 mt-6 mb-1 bg">
      <div className="bg-gray-300 px-4 py-1 self-start text-[14px] rounded-md ml-1 shadow-lg font-lg shadow-blue-700">
        {answer}
      </div>
      <div className="bg-gray-400 px-4 py-1 rounded-md shadow-lg text-[14px] shadow-blue-700 self-end mr-2">
        {question}
      </div>
    </li>
  );
};
export default ChatCard;
