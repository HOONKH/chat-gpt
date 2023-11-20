import { Fragment, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { ImBin } from "react-icons/im";

const ChatSideCard = ({ question, answer }) => {
  const onClickDel = () => {
    const localChatList = localStorage.getItem("questions");

    if (!localChatList) return;

    const parsedChatList = JSON.parse(localChatList);

    const deletedChatList = parsedChatList.filter((v) => {
      return v.answer !== answer;
    });
    if (deletedChatList === 0) {
      localStorage.removeItem("question");
    } else {
      localStorage.setItem("questions", JSON.stringify(deletedChatList));
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const onClickClose = () => {
    setIsOpen(false);
  };
  const onClickModal = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <li
        className="mb-1 truncate cursor-pointer hover:font-bold mt-3 flex items-center "
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 text-white bg-black w-full h-full z-30 opacity-70 ">
          <div className="rounded-md bg-blue-900 fixed p-4 w-[1000px] h-[700px] top-1/8 left-1/4 text-[15px] translate-x-1/5 translate-y-1 whitespace-pre-wrap overflow-y-auto">
            <button
              className="hover:bg-blue-700 active:bg-blue-900 rounded-md text-2xl "
              onClick={onClickClose}
            >
              <FiArrowLeft />
            </button>
            <button onClick={onClickDel}>
              <ImBin className="ml-3 text-lg mb-0.5" />
            </button>
            <div>Q. {question}</div>
            <div>A. {answer}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default ChatSideCard;
