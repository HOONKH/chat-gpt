const ChatView = ({ chatList }) => {
  return (
    <div className="bg-green-300 grow">
      <ul>
        {chatList.length === 0
          ? "채팅이 없습니다"
          : chatList.map((v, i) => (
              <li>
                <div>{v.answer}</div>
                <div>{v.question}</div>
              </li>
            ))}
      </ul>
    </div>
  );
};
export default ChatView;
