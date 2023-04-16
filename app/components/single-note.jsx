"use client";

import { useState } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

const SingleNot = ({
  title,
  checked,
  id,
  desc,
  dueDate,
  isDone,
  markAsDone,
}) => {
  const [noteIsOppen, setNoteIsOppen] = useState(false);
  function handleTheDoneIconClick(e) {
    e.stopPropagation();

    console.log("done clicked");
  }
  // proble of two calls of the function
  function handleNoteClick(e) {
    if (e.target.tagName.toLowerCase() != "div") {
      return;
    }
    console.log("handleNoteClick clicked");
    setNoteIsOppen(!noteIsOppen);
  }

  // async function handleNoteClick() {
  //   console.log("noteIsOppen");
  //   markAsDone(id);
  //   // change in UI
  //   setNoteIsOppen(() => !noteIsOppen);
  // }
  return (
    <div
      onClick={handleNoteClick}
      className={noteIsOppen ? "bg-gray-900" : "" + " " + ` `}
    >
      <div className="p-4 rounded  hover:bg-gray-900 border-b-2 border-blue-gray">
        {/* visible part allways */}
        <div className="flex items-center  justify-between">
          {/* text and circle */}
          <div className="flex items-center">
            <input
              className="hidden"
              type="checkbox"
              id={`check_box_${id}`}
              checked={checked}
              onChange={handleTheDoneIconClick}
            />
            <label
              className="flex items-center h-10 px-2 rounded  hover:bg-gray-900"
              htmlFor={`check_box_${id}`}
            >
              <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-4 text-sm">{title}</span>
            </label>
          </div>
          {/* icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 96 96"
              fill="none"
            >
              <g clipPath="url(#clip0_3_2)">
                <path
                  d="M29.64 34.36L48 52.68L66.36 34.36L72 40L48 64L24 40L29.64 34.36Z"
                  fill="#DDDDDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_2">
                  <rect width="96" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        {/* hidden part */}
        <div className={noteIsOppen ? "h-auto" : "h-0" + " overflow-hidden"}>
          <p className="text-blue-gray text-sm pt-2">{desc}</p>

          <span className="text-blue-gray text-xs underline flex justify-end">
            due to {dueDate?.toDate().toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleNot;
