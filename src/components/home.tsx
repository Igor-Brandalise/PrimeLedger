import { useState } from "react";
import { Entradas } from "./entradas";
import { Saidas } from "./saidas";
import { Saldo } from "./saldo";
import { Tabela } from "./tabela";

export function Home() {
  const [salario, setSalario] = useState("");
  const [saidas, setSaidas] = useState("");
  
  const data: Date = new Date();
  const mes = data.getMonth();
  const dia = data.getDate();
  const hora = data.getHours()
  const min = data.getMinutes()
  const dataFormatada = `${dia}/${mes + 1} ${hora}:${min}`;
  
  const [despesas, setDespesas] = useState([
    { id: 1, desc: "", valor: "", data: dataFormatada },
  ]);

  function handleChange(
    id: number,
    campo: "desc" | "data" | "valor",
    valor: string,
  ) {
    const novaLista = despesas.map((item) =>
      item.id === id ? { ...item, [campo]: valor } : item,
    );

    return setDespesas(novaLista);
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <Entradas salario={salario} setSalario={setSalario} />

      <Saidas saidas={saidas} setSaidas={setSaidas} />

      <Saldo salario={salario} saidas={saidas} />

      <Tabela dadosTabela={handleChange} despesa={despesas} setDespesa={setDespesas} data={dataFormatada}/>
    </main>
  );
}
