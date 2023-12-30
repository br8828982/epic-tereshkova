import { ChangeEvent } from "react";
import { Task, TaskStatusUpdate } from "./Interfaces";

interface TaskItemProps {
  task: Task;
  onStatusChange: ({ taskId, newStatus }: TaskStatusUpdate) => void;
}

const TaskItem = ({ task, onStatusChange }: TaskItemProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onStatusChange({
      taskId: task.id,
      newStatus: e.target.checked ? "completed" : "incomplete",
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.status === "completed"}
        onChange={handleChange}
      />
      <span
        style={{
          textDecoration: task.status === "completed" ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
    </div>
  );
};

export default TaskItem;
