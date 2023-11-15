const App = () => {
  return (
    <div className=" min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-amber-200 w-52">Side</div>
      <div className="grow flex flex-col">
        <div className="bg-green-200 grow">Main</div>
        <div className="bg-blue-200 h-20">Chat Bar</div>
      </div>
    </div>
  );
};

export default App;
