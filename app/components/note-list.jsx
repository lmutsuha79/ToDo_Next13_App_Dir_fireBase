import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SingleNot from "./single-note";

const NoteList = ({ notesList, setNoteList, markAsDone }) => {
  function handleDragEnd(result) {
    // This function uses the Array.from method to create a copy of an array,
    //  and the splice method to reorder the items in the array based on the source
    //  and destination indices provided by the "result" parameter.
    // The item to be reordered is extracted using splice and then inserted at the new index using another splice call.
    if (!result.destination) return; // to avoid errors when draging items outside the drag area

    const items = Array.from(notesList);
    const [reOrderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reOrderedItem);

    setNoteList(items);
  }

  if (notesList.length === 0) {
    return <p className="text-blue-gray">no tasks to display!</p>;
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="notes_list">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="h-full overflow-y-scroll overflow-x-hidden"
          >
            {notesList.map((note, index) => {
              return (
                <Draggable key={note.id} draggableId={note.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SingleNot
                        markAsDone={markAsDone}
                        title={note.title}
                        desc={note.description}
                        dueDate={note.dueDate}
                        isDone={note.isDone}
                        id={note.id}
                      />
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default NoteList;
