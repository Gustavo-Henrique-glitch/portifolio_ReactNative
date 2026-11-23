import { StyleSheet } from "react-native";

/**
 * Paleta e escala do app: papel branco, tinta e um único acento interativo.
 * A serifa fica na camada de display; Inter no corpo e nos metadados.
 */
export const cores = {
  papel: "#ffffff",
  papelSuave: "#fafafa",
  tinta: "#111111",
  tintaMedia: "#4b5563",
  linha: "#e5e7eb",
  acento: "#1d4ed8",
  acerto: "#15803d",
  erro: "#b91c1c",
} as const;

export const layout = {
  larguraMaxima: 720,
  larguraLarga: 600,
  espacoLateral: 20,
  espacoLateralLargo: 24,
  espacoSecao: 28,
  raio: 6,
} as const;

export const fontes = {
  regular: "Inter_400Regular",
  media: "Inter_500Medium",
  semiNegrito: "Inter_600SemiBold",
  serifa: "InstrumentSerif_400Regular",
} as const;

export const texto = StyleSheet.create({
  nome: {
    fontFamily: fontes.serifa,
    fontSize: 40,
    lineHeight: 44,
    letterSpacing: -0.5,
    color: cores.tinta,
  },
  subtitulo: {
    fontFamily: fontes.regular,
    fontSize: 16,
    lineHeight: 24,
    color: cores.tintaMedia,
    marginTop: 8,
  },
  lead: {
    fontFamily: fontes.regular,
    fontSize: 18,
    lineHeight: 30,
    color: cores.tinta,
  },
  corpo: {
    fontFamily: fontes.regular,
    fontSize: 16,
    lineHeight: 27,
    color: cores.tinta,
  },
  tituloSecao: {
    fontFamily: fontes.serifa,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.2,
    color: cores.tinta,
    marginBottom: 24,
  },
  tituloEntrada: {
    fontFamily: fontes.serifa,
    fontSize: 21,
    lineHeight: 27,
    letterSpacing: -0.1,
    color: cores.tinta,
  },
  meta: {
    fontFamily: fontes.media,
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: cores.tintaMedia,
  },
  auxiliar: {
    fontFamily: fontes.regular,
    fontSize: 14,
    lineHeight: 22,
    color: cores.tintaMedia,
  },
  rotulo: {
    fontFamily: fontes.media,
    fontSize: 16,
    lineHeight: 26,
    color: cores.tinta,
  },
  link: {
    fontFamily: fontes.regular,
    fontSize: 16,
    lineHeight: 26,
    color: cores.acento,
  },
  linkPequeno: {
    fontSize: 14,
    lineHeight: 22,
  },
  tag: {
    fontFamily: fontes.regular,
    fontSize: 12,
    lineHeight: 20,
    color: cores.tintaMedia,
  },
});
