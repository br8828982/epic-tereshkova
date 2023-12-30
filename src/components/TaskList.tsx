import { useState } from "react";
import TaskItem from "./TaskItem";
import { Task, TaskStatusUpdate } from "./Interfaces";
import { initialTasks } from "./TaskData";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleStatusChange = ({ taskId, newStatus }: TaskStatusUpdate) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
