import { Plus } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between items-center p-10  h-18 w-full border-b-2 border-green-500">
      <h1 className="text-green-700 text-2xl font-extrabold">PrimeLedger</h1>
      <button className=""><Plus size={22} color="white"/></button>
    </header>
  );
}
