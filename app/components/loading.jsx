const Loading = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-800">
      {/* <div class="wave"> */}
      <div className="flex">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
      {/* </div> */}
      <p className="text-blue-gray text-md font-medium"> Loading </p>
    </div>
  );
};

export default Loading;
