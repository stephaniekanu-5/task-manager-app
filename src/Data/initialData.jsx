export const initialData = {
  tasks: {
    "task-1": { 
      id: "task-1", 
      content: "Build portfolio website",
      priority: "High",
      deadline: "30 March"
    },
    "task-2": { 
      id: "task-2", 
      content: "Learn React hooks",
      priority: "Medium",
      deadline: "5 April"
    },
    "task-3": { 
      id: "task-3", 
      content: "Apply for frontend jobs",
      priority: "High",
      deadline: "10 April"
    }
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1"]
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-2"]
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-3"]
    }
  },

  columnOrder: ["column-1", "column-2", "column-3"]
};