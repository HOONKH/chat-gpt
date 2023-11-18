import { DiAtom } from "react-icons/di";
const ChatCard = ({ answer, question }) => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const zeromin = (min < 10 ? "0" : "") + min;

  const ampm = hour < 12 ? "AM" : "PM";
  const formattedTime = ` ${hour}:${zeromin} ${ampm}`;

  return (
    <li className=" flex flex-col gap-4 mt-3 mb-1 bg z-20">
      <div className="bg-gray-300 px-4 py-1 self-start text-[12px] rounded-md ml-1 shadow-lg font-lg shadow-blue-700">
        <DiAtom className="text-3xl" />
        {answer}
      </div>
      <div>
        {" "}
        <span className="text-[12px]">{formattedTime}</span>
      </div>
      <div className="bg-gray-400 px-4 py-1 rounded-md shadow-lg text-[12px] shadow-blue-700 self-end mr-2 mb-3">
        {question}
      </div>
      <span className="text-right text-[12px] -mt-3 mr-2">{formattedTime}</span>
    </li>
  );
};
export default ChatCard;
