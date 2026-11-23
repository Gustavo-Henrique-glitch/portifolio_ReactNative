import { StyleSheet, Text, View } from "react-native";

import { texto } from "@/theme/tokens";

type Props = {
  titulo: string;
  contexto?: string;
  descricao: string;
};

/** Bloco contexto + título + parágrafo, como as entradas do currículo web. */
export function Entrada({ titulo, contexto, descricao }: Props) {
  return (
    <View style={styles.entrada}>
      {contexto ? <Text style={texto.meta}>{contexto}</Text> : null}
      <Text style={texto.tituloEntrada}>{titulo}</Text>
      <Text style={[texto.corpo, styles.descricao]}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  entrada: {
    gap: 2,
  },
  descricao: {
    marginTop: 6,
  },
});
