import { useCallback, useState } from "react";

import { MAX_ERROS, sortearPalavra } from "@/data/forca";

export function useForca() {
  const [palavra, setPalavra] = useState(() => sortearPalavra(""));
  const [corretas, setCorretas] = useState<string[]>([]);
  const [erradas, setErradas] = useState<string[]>([]);

  const venceu = palavra
    .split("")
    .every((letra) => corretas.includes(letra));
  const perdeu = erradas.length >= MAX_ERROS;
  const fimDeJogo = venceu || perdeu;

  const tentarLetra = useCallback(
    (letra: string) => {
      if (fimDeJogo) return;
      if (corretas.includes(letra) || erradas.includes(letra)) return;

      if (palavra.includes(letra)) {
        setCorretas((anteriores) => [...anteriores, letra]);
      } else {
        setErradas((anteriores) => [...anteriores, letra]);
      }
    },
    [palavra, corretas, erradas, fimDeJogo],
  );

  const reiniciar = useCallback(() => {
    setPalavra((atual) => sortearPalavra(atual));
    setCorretas([]);
    setErradas([]);
  }, []);

  return {
    palavra,
    corretas,
    erradas,
    venceu,
    perdeu,
    tentarLetra,
    reiniciar,
  };
}
