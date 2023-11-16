import { Fragment, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const ChatSideCard = ({ question, answer }) => {
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
        className="mb-1 truncate cursor-pointer hover:font-bold mt-3"
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 text-white bg-black w-full h-full z-10 opacity-70 ">
          <div className="rounded-md bg-blue-900 fixed p-4 w-[1000px] h-[700px] top-1/4 left-1/3 translate-x-1/7 translate-y-1/6 whitespace-pre-wrap overflow-y-auto">
            <button className="text-2xl" onClick={onClickClose}>
              <FiArrowLeft />
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
