type TabelaProps = {
  dadosTabela: (
    id: number,
    campo: "desc" | "data" | "valor",
    valor: string,
  ) => void;

  despesa: { 
    id: number,
    desc: string,
    valor: string,
    data: string 
  }[];

  setDespesa:{
    id: number;
    desc: string;
    valor: string;
    data: string;
  }[]

  data:{
    dataFormatada: string
  }
};

export function Tabela({ dadosTabela, despesa, setDespesa, data }: TabelaProps) {
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
            {despesa.map((item) => (
              <tr key={item.id} className="flex gap-7 border">
                <td>
                  <input
                    value={item.desc}
                    onChange={(e) => {
                      dadosTabela(item.id, "desc", e.target.value);
                    }}
                    
                  />
                </td>

                <td>
                  <input
                    value={item.data}
                    onChange={(e) => {
                      dadosTabela(item.id, "data", e.target.value);
                    }}
                    className="border"
                  />
                </td>

                <td>
                  <input
                    value={item.valor}
                    onChange={(e) => {
                      dadosTabela(item.id, "valor", e.target.value);
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
              data: data
            };
            setDespesa([...despesa, novoItem]);
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
