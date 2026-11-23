export const PALAVRAS = [
  "ALGORITMO",
  "VARIAVEL",
  "FUNCAO",
  "OBJETO",
  "CLASSE",
  "METODO",
  "HERANCA",
  "VETOR",
  "MATRIZ",
  "RECURSAO",
  "COMPILADOR",
  "DEPURACAO",
  "SERVIDOR",
  "CLIENTE",
  "REQUISICAO",
  "PROTOCOLO",
  "PACOTE",
  "ROTEADOR",
  "SOCKET",
  "CRIPTOGRAFIA",
  "BIOMETRIA",
  "FIREWALL",
  "CONSULTA",
  "INDICE",
  "CHAVE",
  "TABELA",
  "PYTHON",
  "JAVASCRIPT",
  "REACT",
  "COMPONENTE",
  "ESTADO",
  "RENDERIZACAO",
  "REPOSITORIO",
  "COMMIT",
  "INTERFACE",
  "NEURONIO",
  "TREINAMENTO",
  "ACURACIA",
  "HARDWARE",
  "MEMORIA",
];

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/** Quatro linhas de 7/7/6/6 para as teclas caberem com 44px de alvo no celular. */
export const LINHAS_TECLADO = [
  ALFABETO.slice(0, 7),
  ALFABETO.slice(7, 14),
  ALFABETO.slice(14, 20),
  ALFABETO.slice(20),
];

export const MAX_ERROS = 6;

/** Nunca repete a palavra atual, igual ao site. */
export function sortearPalavra(atual: string): string {
  let nova = atual;
  while (nova === atual) {
    nova = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
  }
  return nova;
}
