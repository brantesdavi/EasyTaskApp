export interface Task {
  taskId?: number;
  title: string;
  description: string;
  priority: Priority;
  createdAt: Date;
  deadline: Date;
  subtasks?: Subtask[];
}

export interface Subtask {
  subtaskId: number;
  description: string;
  done: boolean;
}

export interface Priority {
  priorityId: number;
  name?: string;
  color?: string;
}

export interface TaskByStatus {
  statusId: number;
  name?: string;
  taskList?: Task[];
}


