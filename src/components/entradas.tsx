/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type EntradasProps = {
  salario: string;               
  setSalario: (v: string) => void; 
};

export function Entradas({salario, setSalario}:EntradasProps) {
  const [valor, setValor] = useState("");

  function formatarNumero(v: string) {
    // remove tudo que não é número
    v = v.replace(/\D/g, "");

    if (!v) return "";

    // transforma em decimal
    v = (Number(v) / 100).toFixed(2);

    // troca ponto por vírgula
    v = v.replace(".", ",");

    // adiciona pontos de milhar
    v = v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return v;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digitado = e.target.value;

    // sem formatação
    const bruto = digitado.replace(/\D/g, "");
    setSalario(bruto); 

    // formatação
    const formatado = formatarNumero(digitado);
    setValor(formatado);
  }

  return (
    <div className="relative mt-10 items-center flex">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-extrabold">
        R$
      </span>

      <input
        type="text"
        value={valor}
        onChange={handleChange}
        placeholder="Entradas..."
        className="no-spinner rounded-[10px] p-2 border-2 bg-zinc-400 border-green-600 pl-10 items-center  "
        maxLength={10}
      />
    </div>
  );
}
