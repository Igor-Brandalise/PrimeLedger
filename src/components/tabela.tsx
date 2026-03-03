import { useState } from "react";
import { DeleteButton } from "./deleteButton";

type TabelaProps = {
  dadosTabela: (
    id: number,
    campo: "desc" | "data" | "valor",
    valor: string,
  ) => void;

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

  data: {
    dataFormatada: string;
  };
};

export function Tabela({
  dadosTabela,
  despesa,
  setDespesa,
  data,
}: TabelaProps) {
  
  const [valor, setValor] = useState(0); // guarda só número

  return (
    <div>
      <div className="text-white">
        <table className="mt-10 ">
          <thead>
            <tr className="">
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {despesa.map((item) => (
              <tr key={item.id} >
                <td>
                  <input
                  className="w-35 p-1 pl-2 border md:w-60"
                    value={item.desc}
                    onChange={(e) => {
                      dadosTabela(item.id, "desc", e.target.value);
                    }}
                  />
                </td>

                <td>
                  <input
                    value={item.data}
                    readOnly
                    onChange={(e) => {
                      dadosTabela(item.id, "data", e.target.value);
                    }}
                    className="w-25 p-1 border text-center md:w-28"
                  />
                </td>

                <td>
                  <input
                      className="w-35 p-1 pl-2 border md:w-50"
                    value={Number(item.valor).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    onChange={(e) => {
                      const numeros = e.target.value.replace(/\D/g, "");
                      const numeroReal = Number(numeros) / 100;

                      const novaLista = despesa.map((d) =>
                        d.id === item.id ? { ...d, valor: numeroReal } : d,
                      );

                      setDespesa(novaLista);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => {
            const novoItem = {
              id: Date.now(),
              desc: "",
              valor: " ",
              data: data,
            };
            setDespesa([...despesa, novoItem]);
          }}
          className="border-white border p-2 rounded-[10px] mt-4 "
        >
          Add line
        </button>
        <DeleteButton despesas={despesa} setDespesas={setDespesa}/>
      </div>
    </div>
  );
}
