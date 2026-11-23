import { StyleSheet, Text, View } from "react-native";

import { Screen } from "@/components/Screen";
import { Section } from "@/components/Section";
import { Tags } from "@/components/Tags";
import { TECNOLOGIAS } from "@/data/perfil";
import { texto } from "@/theme/tokens";

export default function Sobre() {
  return (
    <Screen>
      <Section titulo="Sobre mim">
        <Text style={texto.lead}>
          Estudante de Ciência da Computação na UNICAP, com atuação em pesquisa
          científica aplicada à saúde, inteligência artificial e desenvolvimento
          web. Interesse em Ciência de Dados, IA/ML e Cibersegurança.
        </Text>
        <View style={styles.tecnologias}>
          <Tags itens={TECNOLOGIAS} />
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tecnologias: {
    marginTop: 24,
  },
});
