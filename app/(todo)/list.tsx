"use client";
import { ListProps } from "@/app/types/types";
import { Archive, CheckCircle, Trash01 } from "@untitledui/icons";
import { useState } from "react";

const List = ({ todos, onDelete }: ListProps) => {
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setRemovingId(id);
    setTimeout(() => onDelete(id), 300);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
      {todos.map((todo) => {
        const isRemoving = removingId === todo.id;

        return (
          <div
            key={todo.id}
            className={`
              bg-slate-800 p-4 flex flex-col rounded-xl
              transition-all duration-300
              ${isRemoving ? "opacity-0 scale-50" : "opacity-100 scale-100"}
            `}>
            <p className="text-xl break-words mb-4">{todo.title}</p>

            <div className="flex justify-between w-full mt-auto">
              <CheckCircle className="hover:scale-110 hover:text-green-500 cursor-pointer transition" />
              <Archive className="hover:scale-110 hover:text-blue-500 cursor-pointer transition" />
              <Trash01
                className="hover:scale-110 hover:text-red-500 cursor-pointer transition"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
