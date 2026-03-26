import { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { initialData } from "../Data/initialData";
import Column from "./Column";

export default function Board() {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("taskData");
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(data));
  }, [data]);

  function onDragEnd(result) {

    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [column.id]: newColumn
      }
    };

    setData(newData);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">

        {data.columnOrder.map((columnId) => {

          const column = data.columns[columnId];

          const tasks = column.taskIds.map(
            (taskId) => data.tasks[taskId]
          );

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              data={data}
              setData={setData}
            />
          );
        })}

      </div>
    </DragDropContext>
  );
}