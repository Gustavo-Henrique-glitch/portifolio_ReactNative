import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { cores, layout, texto } from "@/theme/tokens";

type Props = {
  titulo: string;
  children: ReactNode;
};

/** Cabeçalho de seção: régua fina, título serifado e conteúdo. */
export function Section({ titulo, children }: Props) {
  return (
    <View style={styles.secao}>
      <Text style={texto.tituloSecao}>{titulo}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  secao: {
    borderTopWidth: 1,
    borderTopColor: cores.linha,
    paddingTop: 20,
    paddingBottom: layout.espacoSecao,
  },
});
