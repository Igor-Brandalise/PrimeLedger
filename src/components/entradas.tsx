/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type EntradasProps = {
  salario: string;               
  setSalario: (v: string) => void; 
};

export function Entradas({salario, setSalario}:EntradasProps) {
  const [valor, setValor] = useState("");

function formatarNumero(v: string) {
  if (!v) return "";

  // número com 2 casas
  const n = (Number(v) / 100).toFixed(2);

  return n
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digitado = e.target.value;

    // sem formatação
    let bruto = digitado.replace(/\D/g, "");
    
    if (bruto.length > 10) {
    bruto = bruto.slice(0, 10); 
  }

  setSalario(bruto)
    // formatação
    const formatado = formatarNumero(bruto);
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
      />
    </div>
  );
}
