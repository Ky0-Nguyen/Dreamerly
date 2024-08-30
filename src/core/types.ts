export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-review' | 'todo';
  createdAt: string;
  category: string;
  reminder: any;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  tags: string[];  // Add this field
};
