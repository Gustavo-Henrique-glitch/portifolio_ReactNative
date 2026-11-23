import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

import { Screen } from "@/components/Screen";
import { Section } from "@/components/Section";
import { PROJETOS } from "@/data/perfil";
import { cores, layout, texto } from "@/theme/tokens";

export default function Projetos() {
  return (
    <Screen>
      <Section titulo="Projetos">
        <View>
          {PROJETOS.map((projeto, indice) => (
            <View
              key={projeto.titulo}
              style={[styles.projeto, indice > 0 && styles.projetoComRegua]}
            >
              <Text style={texto.tituloEntrada}>{projeto.titulo}</Text>
              <Text style={[texto.meta, styles.meta]}>
                {projeto.tecnologias}
              </Text>
              <Text style={texto.corpo}>{projeto.descricao}</Text>

              <Pressable
                accessibilityRole="link"
                accessibilityLabel={`Ver ${projeto.titulo} no GitHub`}
                accessibilityHint="Abre o repositório fora do aplicativo"
                onPress={() => {
                  void Linking.openURL(projeto.repositorio);
                }}
                style={({ pressed }) => [
                  styles.botao,
                  pressed && styles.botaoPressionado,
                ]}
              >
                <Text style={[texto.link, texto.linkPequeno]}>
                  Ver repositório no GitHub
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  projeto: {
    paddingVertical: 24,
    gap: 8,
  },
  projetoComRegua: {
    borderTopWidth: 1,
    borderTopColor: cores.linha,
  },
  meta: {
    marginBottom: 4,
  },
  botao: {
    minHeight: 44,
    marginTop: 8,
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: cores.linha,
    borderRadius: layout.raio,
  },
  botaoPressionado: {
    backgroundColor: cores.papelSuave,
  },
});
