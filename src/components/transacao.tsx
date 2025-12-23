/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export function Transacao() {
  const data: Date = new Date();
  const mes = data.getMonth()
  const dia = data.getDate()
  const dataFormatada = `${dia}/${mes+1}`

  const [despesas, setDespesas] = useState([
    { id: 1, desc: "mercado", data: dataFormatada, valor: "10" },
  ]);

  function handleChange(
    id: number,
    campo: "desc" | "data" | "valor",
    valor: string
  ) {
    const novaLista = despesas.map((item) =>
      item.id === id ? { ...item, [campo]: valor } : item
    );
    setDespesas(novaLista);
  }

  return (
    <div>
      <div className="text-white">
        <table className="m-10 ">
          <thead>
            <tr className="flex justify-between items-center">
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {despesas.map((item) => (
              <tr key={item.id} className="flex gap-7 border">
                <td>
                  <input
                    value={item.desc}
                    onChange={(e) => {
                      handleChange(item.id, "desc", e.target.value);
                    }}
                  />
                </td>

                <td>
                  <input
                    value={item.data}
                    onChange={(e) => {
                      handleChange(item.id, "data", e.target.value);
                    }}
                    className="border"
                  />
                </td>

                <td>
                  <input
                    value={item.valor}
                    onChange={(e) => {
                      
                      handleChange(item.id, "valor", e.target.value);
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
              nome: "Nova Despesa",
              valor: " ",
              data: dataFormatada,
            };
            setDespesas([...despesas, novoItem]);
          }}
          className="border-white border p-2 rounded-[10px]"
        >
          Add line
        </button>
      </div>
      <div></div>
    </div>
  );
}
