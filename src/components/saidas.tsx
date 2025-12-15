/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type SaidassProps = {
  saidas: string; // valor bruto
  setSaidas: (v: string) => void; // função que atualiza
};

export function Saidas({ saidas, setSaidas }: SaidassProps) {


  return (
    <div className="relative mt-10 items-center flex">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-extrabold">
        R$
      </span>

      <input
        type="text"
        //value={}
        //onChange={}
        //readOnly
        placeholder="Saidas..."
        className="no-spinner rounded-[10px] p-2 border-2 bg-zinc-400 border-green-600 pl-10 items-center  "
        maxLength={10}
      />
    </div>
  );
}
