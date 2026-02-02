"use client";
import { useState } from "react";
import { TodoItem } from "@/app/types/types";
import Input from "../input";
import List from "../list";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center items p-10">
        <Input onAdd={addTodo} />
        <div className=" my-8 border-t border-slate-600/50 w-full flex flex-col items-center justify-center  ">
          <h3 className="text-xl font-black my-8 ">Your Todos</h3>
          <List todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
