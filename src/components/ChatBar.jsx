import { CgSpinnerTwo } from "react-icons/cg";
import axios from "axios";
import { useEffect, useState } from "react";

const ChatBar = ({ setChatList, chatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      if (!newQuestion) return;
      console.log(process.env.REACT_APP_OPEN_AI_KEY);
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: newQuestion }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );
      console.log(response);
      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
      ]);
      setNewQuestion("");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-green-300 h-20">
      <form onSubmit={onSubmitChat} className=" flex h-full items-center px-4">
        <input
          className={`ml-4 grow py-1 px-2 focus:outline-none border-2 focus:border-green-300 mr-4 rounded-md ${
            isLoading && "bg-gray-100 text-gray-500"
          } `}
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={isLoading}
          placeholder="다 대답해줄게"
        />
        <button
          className="hover:bg-green-600 active:bg-green-800 bg-green-400 w-28 py-[6px] rounded-md
          text-sm font-semibold flex justify-center items-center "
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin-slow text-2xl " />
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  );
};
export default ChatBar;
