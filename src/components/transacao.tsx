/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export function Transacao() {
  const [despesas, setDespesas] = useState([
    { id: 1, desc: "mercado", data: "12/09", valor: "10" },
  ]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setDespesas({
      ...despesas, // mantém os valores antigos
      [name]: value, // atualiza só o campo que mudou
    });
  }

  return (
    <div>
      <div className="text-white">
        <table className="m-10 ">
          <thead>
            <tr className="flex gap-5">
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
                   className="border"/>
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
              valor: 0,
              data: "",
            };
            setDespesas([...despesas, novoItem]);
          }}
          className="border-white border p-2 rounded-[10px]"
        >
          Add line
        </button>
      </div>
      <div>

      </div>
    </div>
  );
}
