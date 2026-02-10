type saidasProps = {
  gasto: number;
};

export function Saidas({ gasto }: saidasProps) {
  return (
    <div className="relative mt-10 items-center flex">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-extrabold">
        R$
      </span>

      <input
        type="text"
        readOnly
        value={gasto}
        //onChange={}
        placeholder="Saídas"
        className="no-spinner rounded-[10px] p-2 border-2 bg-zinc-400 border-green-600 pl-10 items-center  "
      />
    </div>
  );
}
