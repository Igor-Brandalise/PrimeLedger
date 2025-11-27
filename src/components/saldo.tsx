/* eslint-disable prefer-const */
type SaldoProps = {
  salario: string; // valor bruto
  saidas: string; // função que atualiza
};

export function Saldo({ salario, saidas }: SaldoProps) {
  const entrada = Number(salario);
  const gastos = Number(saidas);

 function formatarNumero(n: number) {
  return n
    .toFixed(2)                     // força 2 casas decimais
    .replace(".", ",")              // troca ponto por vírgula
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // milhar
}

  // eslint-disable-next-line prefer-const
  let numero = entrada - gastos
  let saldo = formatarNumero(numero);

  return (
    <div className="relative mt-10 items-center flex">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-extrabold">
        R$
      </span>

      <input
        type="text"
        value={saldo}
        readOnly
        placeholder="Saldo..."
        className="no-spinner rounded-[10px] p-2 border-2 bg-zinc-400 border-green-600 pl-10 items-center  "
        maxLength={10}
      />
    </div>
  );
}
