const Footer = ({ trunOnAddForm }) => {
  return (
    <div className="h-[10%]">
      <button
        onClick={trunOnAddForm}
        className=" px-2 group cursor-pointer absolute bottom-2 flex items-center w-full  text-sm font-medium rounded"
      >
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-gray-400 group-hover:text-white transition-colors flex items-center  flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium">
          add a new task
        </span>
      </button>
    </div>
  );
};

export default Footer;
