import { ListProps } from "@/app/types/types";

const List = ({ todos }: ListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-10 gap-5">
      {todos?.map((todo, i) => (
        <div
          key={i}
          className="bg-slate-800 p-10 flex flex-wrap rounded-xl hover:bg-slate-700/50 hover:scale-110 transition-all">
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
