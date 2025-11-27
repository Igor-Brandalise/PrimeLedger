import { useState } from "react";
import { Entradas } from "./entradas";
import { Saidas } from "./saidas";
import { Saldo } from "./saldo";

export function Home() {
  const [salario, setSalario] = useState("");
  const [saidas, setSaidas] = useState("");

  return (
    <main className="flex items-center justify-center gap-8">
      <Entradas salario={salario} setSalario={setSalario} />

      <Saidas saidas={saidas} setSaidas={setSaidas} />

      <Saldo salario={salario} saidas={saidas} />
    </main>
  );
}
