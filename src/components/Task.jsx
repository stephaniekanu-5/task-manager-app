import { Draggable } from "@hello-pangea/dnd";

export default function Task({ task, index, column, data, setData }) {

  function deleteTask() {
    const newTaskIds = column.taskIds.filter(id => id !== task.id);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newTasks = { ...data.tasks };
    delete newTasks[task.id];

    setData({
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [column.id]: newColumn
      }
    });
  }

  function editTask() {
    const newContent = prompt("Edit task", task.content);
    if (!newContent) return;

    const updatedTask = {
      ...task,
      content: newContent
    };

    setData({
      ...data,
      tasks: {
        ...data.tasks,
        [task.id]: updatedTask
      }
    });
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task-content">
            <p>{task.content}</p>
            <small className={`priority ${task.priority}`}>
              {task.priority}
            </small>
            <p className="deadline">⏰ {task.deadline}</p>
          </div>

          <div className="task-buttons">
            <button onClick={editTask}>✏️</button>
            <button onClick={deleteTask}>❌</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}