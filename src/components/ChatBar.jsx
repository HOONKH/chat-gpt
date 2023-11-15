import { useEffect, useState } from "react";

const ChatBar = () => {
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    console.log(newQuestion);
  }, [newQuestion]);

  return (
    <div className="bg-blue-200 h-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-red-100 flex h-full items-center px-4"
      >
        <input
          className=" ml-4 grow py-1 px-2 focus:outline-none border-2 focus:border-green-300 mr-4 rounded-md"
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          className="hover:bg-green-600 bg-green-400 w-28 py-[6px] rounded-md text-sm font-semibold"
          type="submit"
          value="검색"
        />
      </form>
    </div>
  );
};
export default ChatBar;
