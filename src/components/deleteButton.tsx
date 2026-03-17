type deleteProps = {
  despesa: {
    id: number;
    desc: string;
    valor: string;
    data: string;
  }[];

  setDespesa: {
    id: number;
    desc: string;
    valor: string;
    data: string;
  }[];
};

export function DeleteButton({ despesa, setDespesa }: deleteProps) {

  return (

      <button
        onClick={() => {
           
        }}
        className="bg-red-500 text-white font-extrabold p-2 rounded-md"
      >
        Delete
      </button>

  
  );
}
