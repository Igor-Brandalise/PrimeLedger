/* eslint-disable prefer-const */

import { Saidas } from "./saidas";

type SaldoProps = {
  salario: string;
  saidas: {
    id: number;
    desc: string;
    valor: string;
    data: string;
  }[];
};

export function Saldo({ salario, saidas }: SaldoProps) {
  const entrada = Number(salario) / 100;

  let valorGasto = 0;
  saidas.forEach((item) => {
    valorGasto += Number(item.valor) || 0;
  });

  let total = entrada - valorGasto;

  function formatarNumero(n: number | string) {
    const num = Number(n);

    const seguro = Math.floor(num * 100) / 100; // remove lixo do float

    return seguro
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  let final = formatarNumero(total);

  return (
    <div className=" ">
      <Saidas gasto={valorGasto} />

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-extrabold">
          R$
        </span>

        <input
          type="text"
          value={final}
          readOnly
          placeholder="Saldo..."
          className="no-spiner w-full rounded-[10px] border-2 border-green-600 bg-zinc-400 pl-10 py-2 text-black"
        />
      </div>
    </div>
  );
}
