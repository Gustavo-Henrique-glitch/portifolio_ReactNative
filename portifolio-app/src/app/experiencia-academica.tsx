import { StyleSheet, Text, View } from "react-native";

import { Entrada } from "@/components/Entrada";
import { Screen } from "@/components/Screen";
import { Section } from "@/components/Section";
import { EXTRACURRICULARES, PESQUISA } from "@/data/perfil";
import { cores, texto } from "@/theme/tokens";

export default function ExperienciaAcademica() {
  return (
    <Screen>
      <Section titulo="Formação acadêmica">
        <Text style={texto.tituloEntrada}>
          Bacharelado em Ciência da Computação
        </Text>
        <Text style={[texto.meta, styles.formacao]}>
          Universidade Católica de Pernambuco (UNICAP) — Recife/PE — em andamento
        </Text>
      </Section>

      <Section titulo="Pesquisa científica">
        <View style={styles.lista}>
          {PESQUISA.map((item) => (
            <Entrada
              key={item.titulo}
              titulo={item.titulo}
              descricao={item.descricao}
            />
          ))}
        </View>
      </Section>

      <Section titulo="Atividades extracurriculares">
        <View>
          {EXTRACURRICULARES.map((item, indice) => (
            <View
              key={item}
              style={[styles.itemLista, indice > 0 && styles.itemComRegua]}
            >
              <Text style={texto.corpo}>{item}</Text>
            </View>
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formacao: {
    marginTop: 4,
  },
  lista: {
    gap: 32,
  },
  itemLista: {
    paddingVertical: 14,
  },
  itemComRegua: {
    borderTopWidth: 1,
    borderTopColor: cores.linha,
  },
});
