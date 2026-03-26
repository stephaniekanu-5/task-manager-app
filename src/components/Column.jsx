import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";

export default function Column({ column, tasks, data, setData }) {

  function addTask() {

    const content = prompt("Enter task");
    if (!content) return;

    const priority = prompt("Priority (High / Medium / Low)") || "Low";
    const deadline = prompt("Enter deadline (example: 25 June)") || "No deadline";

    const newId = "task-" + Date.now();

    const newTask = {
      id: newId,
      content,
      priority,
      deadline
    };

    const newTasks = {
      ...data.tasks,
      [newId]: newTask
    };

    const newColumn = {
      ...column,
      taskIds: [...column.taskIds, newId]
    };

    setData({
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [column.id]: newColumn
      }
    });
  }

  return (
    <div className="column">

      <h3>{column.title}</h3>

      <button onClick={addTask}>+ Add Task</button>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >

            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                column={column}
                data={data}
                setData={setData}
              />
            ))}

            {provided.placeholder}

          </div>
        )}
      </Droppable>

    </div>
  );
}