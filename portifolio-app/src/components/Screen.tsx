import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/components/Header";
import { cores, layout, texto } from "@/theme/tokens";

type Props = {
  children: ReactNode;
};

/** Estrutura comum das telas: cabeçalho, conteúdo com largura máxima e rodapé. */
export function Screen({ children }: Props) {
  const { width } = useWindowDimensions();
  const lateral =
    width >= layout.larguraLarga
      ? layout.espacoLateralLargo
      : layout.espacoLateral;

  return (
    <SafeAreaView style={styles.areaSegura} edges={["top", "left", "right"]}>
      <Header />
      <ScrollView
        style={styles.rolagem}
        contentContainerStyle={styles.conteudoRolagem}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.pagina, { paddingHorizontal: lateral }]}>
          {children}
        </View>
        <View style={[styles.rodape, { paddingHorizontal: lateral }]}>
          <Text style={styles.rodapeTexto}>
            © 2026 Gustavo Henrique Mendes Pinheiro — Recife/PE
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: cores.papel,
  },
  rolagem: {
    flex: 1,
  },
  conteudoRolagem: {
    flexGrow: 1,
  },
  pagina: {
    width: "100%",
    maxWidth: layout.larguraMaxima,
    alignSelf: "center",
    paddingTop: 40,
    paddingBottom: 24,
  },
  rodape: {
    borderTopWidth: 1,
    borderTopColor: cores.linha,
    paddingVertical: 20,
    alignItems: "center",
  },
  rodapeTexto: {
    ...texto.tag,
    textAlign: "center",
  },
});
