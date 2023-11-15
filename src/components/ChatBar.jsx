import axios from "axios";
import { useEffect, useState } from "react";

const ChatBar = () => {
  const [newQuestion, setNewQuestion] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

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
      setNewQuestion("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-200 h-20">
      <form
        onSubmit={onSubmitChat}
        className="bg-red-100 flex h-full items-center px-4"
      >
        <input
          className=" ml-4 grow py-1 px-2 focus:outline-none border-2 focus:border-green-300 mr-4 rounded-md"
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={false}
        />
        <input
          className="hover:bg-green-600 bg-green-400 w-28 py-[6px] rounded-md text-sm font-semibold"
          type="submit"
          value="검색"
          disabled={true}
        />
      </form>
    </div>
  );
};
export default ChatBar;
