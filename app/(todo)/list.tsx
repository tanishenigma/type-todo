import { ListProps } from "@/app/types/types";
import { Archive, CheckCircle, Trash01 } from "@untitledui/icons";

const List = ({ todos }: ListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-10 gap-5">
      {todos?.map((todo, i) => (
        <div
          key={i}
          className="bg-slate-800 p-4 flex flex-col rounded-xl hover:bg-slate-700/50 hover:scale-105 transition-all">
          <p className="flex flex-wrap h-20 break-all text-xl">{todo.title}</p>
          <div className="flex justify-around px-20 ">
            <CheckCircle
              size={24}
              className=" hover:scale-110 transition-all hover:text-green-500 cursor-pointer"
            />
            <Archive
              size={24}
              className="hover:scale-110 transition-all hover:text-blue-500 cursor-pointer"
            />
            <Trash01
              size={24}
              className="hover:scale-110 transition-all hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
