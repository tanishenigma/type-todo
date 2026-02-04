"use client";

import { useState } from "react";
import { TodoItem } from "../types/types";
interface InputProps {
  onAdd: (todo: TodoItem) => void;
}

const Input = ({ onAdd }: InputProps) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("write a todo first");
      return;
    }
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      title: title,
    };
    onAdd(newTodo);
    setTitle("");
  };

  return (
    <div>
      <form
        className="flex flex-col items-center justify-center text-md gap-y-4"
        onSubmit={handleSubmit}>
        <input
          className="rounded-md bg-slate-800 w-full text-xl focus-within:none; outline-none p-3"
          placeholder="Add a Todo"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        {title ? (
          <button className="bg-slate-600 text-slate-200 w-full p-2 rounded-md cursor-pointer hover:bg-slate-500 font-bold ">
            Add
          </button>
        ) : (
          <button className="bg-slate-600 text-slate-400 w-full p-2 rounded-md cursor-not-allowed  font-bold ">
            Add
          </button>
        )}
      </form>
    </div>
  );
};

export default Input;
