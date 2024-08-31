export enum Status {
  COMPLETED = 'completed',
  IN_REVIEW = 'in-review',
  TODO = 'todo',
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress'
}

export enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: Status;
  createdAt: string;
  category: string;
  reminder: any;
  completed: boolean;
  priority: Priority;
  tags: string[];  // Add this field
};
