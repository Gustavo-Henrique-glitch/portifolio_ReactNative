import { StyleSheet, Text, View } from "react-native";

import { cores, layout, texto } from "@/theme/tokens";

type Props = {
  itens: readonly string[];
};

/** Lista de tecnologias como chips discretos — dado discreto, não decoração. */
export function Tags({ itens }: Props) {
  return (
    <View style={styles.lista}>
      {itens.map((item) => (
        <View key={item} style={styles.chip}>
          <Text style={texto.tag}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    borderWidth: 1,
    borderColor: cores.linha,
    borderRadius: layout.raio,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
