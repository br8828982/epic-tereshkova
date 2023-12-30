export interface Task {
  id: number;
  title: string;
  status: "completed" | "incomplete";
}

export interface TaskStatusUpdate  {
  taskId: number;
  newStatus: Task["status"];
}
