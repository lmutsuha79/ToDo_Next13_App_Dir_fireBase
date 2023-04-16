import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const options = {
  title: "Pick a date",
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-blue-gray/10",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    prev: () => (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    next: () => (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "en",
};

const FlowDatePicker = ({setSelectedDate}) => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate)
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
        
      />
    </div>
  );
};

export default FlowDatePicker;
