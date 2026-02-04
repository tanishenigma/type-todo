export interface TodoItem {
  title: string;
  id: string;
}

export interface ListProps {
  todos: TodoItem[];
  onDelete: (id: string) => void;
}
