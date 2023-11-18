import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

const LocalAnswer = ({ prevAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickOpen = () => {
    setIsOpen(true);
  };
  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-red-100 rounded-lg flex flex-col justify-end items-start">
        <button
          className="w-[150px] h-20 text-[12px] rounded-lg overflow-y-auto whitespace-pre-wrap"
          onClick={onClickOpen}
        >
          {prevAnswer.question}
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 text-white bg-black w-full h-full z-30 opacity-70 ">
          <div className="rounded-md bg-blue-900 fixed p-4 w-[1000px] h-[700px] top-1/4 left-1/3 text-[15px] translate-x-1/7 translate-y-1/6 whitespace-pre-wrap overflow-y-auto">
            <button
              className="hover:bg-blue-700 active:bg-blue-900 rounded-md text-2xl "
              onClick={onClickClose}
            >
              <FiArrowLeft />
            </button>
            <div>
              <div>Q. {prevAnswer.question}</div>
              <div>A. {prevAnswer.answer}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default LocalAnswer;
