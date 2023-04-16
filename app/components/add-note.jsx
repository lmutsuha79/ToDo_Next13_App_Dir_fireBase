"use client";
import { useEffect } from "react";
import FlowDatePicker from "./flow-date-picker";

const AddNote = ({ turnOffForm, saveNewNote }) => {
  let selectedDate;
  function setSelectedDate(par) {
    selectedDate = par;
  }
  function submit_the_add_new_note() {
    const title = document.getElementById("newNoteTitle").value.trim();
    let description = document.getElementById("newNoteDesc").value.trim();
    const date = selectedDate === undefined ? new Date() : selectedDate;
    if (title != "") {
      if (description === "") {
        description = "no description";
      }
      saveNewNote({ title: title, description: description, dueDate: date });
      turnOffForm();
    }
  }
  return (
    <div className="grid place-content-center fixed top-0 left-0 w-screen h-screen bg-black/80 z-50">
      <div className="bg-gray-800 h-[80vh] w-96 p-8 rounded-lg text-gray-200">
        <h3 className="font-medium text-lg capitalize text-center border-b-blue-gray border-b-2 pb-2">
          add new task
        </h3>
        <div className="py-4 space-y-2">
          <div>
            <label
              htmlFor="newNoteTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              new task title *
            </label>
            <input
              type="text"
              id="newNoteTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="note number #23"
              required
            />
          </div>
          <div>
            <label
              htmlFor="newNoteDesc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descritpion
            </label>
            <textarea
              id="newNoteDesc"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="add new description to you note ..."
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="newNoteDueDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Due date
            </label>
            <FlowDatePicker setSelectedDate={setSelectedDate} />
          </div>
        </div>
        <button
          onClick={submit_the_add_new_note}
          type="button"
          className="dark:text-white text-black font-medium bg-blue-gray-700 hover:bg-blue-800 focus:ring-4   rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-gray/80 dark:hover:bg-blue-gray focus:outline-none "
        >
          Add Note
        </button>

        <button
          onClick={turnOffForm}
          type="button"
          className="dark:text-white text-black font-medium bg-blue-gray-700 hover:bg-red-800 focus:ring-4   rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-800/80 dark:hover:bg-red-800 focus:outline-none "
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default AddNote;
