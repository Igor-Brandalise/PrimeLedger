/* eslint-disable prefer-const */
type SaldoProps = {
  salario: string; // valor bruto
  saidas: string; // função que atualiza
};

export function Saldo({ salario, saidas }: SaldoProps) {
  const entrada = Number(salario)/100;
  const gastos = Number(saidas)/100;

  function formatarNumero(n: number | string) {
    const num = Number(n);

    const seguro = Math.floor(num * 100) / 100; // remove lixo do float

    return seguro
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // eslint-disable-next-line prefer-const
  let numero = entrada - gastos;
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
      />
    </div>
  );
}
