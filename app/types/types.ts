export interface TodoItem {
  title: string;
  id: number;
}

export interface ListProps {
  todos: TodoItem[];
}
