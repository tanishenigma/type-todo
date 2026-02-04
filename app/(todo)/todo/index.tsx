"use client";
import { useEffect, useState } from "react";
import { TodoItem } from "@/app/types/types";
import Input from "../input";
import List from "../list";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored && stored !== "undefined") {
      try {
        setTodos(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse todos", err);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (newTodo: TodoItem) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const deleteTodo = (id: string) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center items p-10">
        <Input onAdd={addTodo} />
        <div className=" my-8 border-t border-slate-600/50 w-full flex flex-col items-center justify-center  ">
          <h3 className="text-xl font-black my-8 ">Your Todos</h3>
          <List todos={todos} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
