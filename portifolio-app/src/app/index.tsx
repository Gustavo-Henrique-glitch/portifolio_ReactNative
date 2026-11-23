import { StyleSheet, Text, View } from "react-native";

import { LinkExterno } from "@/components/LinkExterno";
import { Screen } from "@/components/Screen";
import { Section } from "@/components/Section";
import { Tags } from "@/components/Tags";
import { EMAIL, GITHUB, LINKEDIN, OBJETIVO, TECNOLOGIAS } from "@/data/perfil";
import { cores, layout, texto } from "@/theme/tokens";

const CONTATOS = [
  { rotulo: "E-mail", href: `mailto:${EMAIL}` },
  { rotulo: "GitHub", href: GITHUB },
  { rotulo: "LinkedIn", href: LINKEDIN },
];

export default function Home() {
  return (
    <Screen>
      <View style={styles.topo}>
        <Text style={texto.nome}>Gustavo Henrique Mendes Pinheiro</Text>
        <Text style={texto.subtitulo}>
          Estudante de Ciência da Computação — UNICAP, Recife/PE
        </Text>
        <Text style={[texto.subtitulo, styles.objetivo]}>
          Objetivo: {OBJETIVO}
        </Text>

        <View style={styles.contatoTopo}>
          {CONTATOS.map((contato, indice) => (
            <View key={contato.rotulo} style={styles.itemContato}>
              {indice > 0 ? <View style={styles.divisor} /> : null}
              <LinkExterno href={contato.href} style={texto.linkPequeno}>
                {contato.rotulo}
              </LinkExterno>
            </View>
          ))}
        </View>
      </View>

      <Section titulo="Sobre mim">
        <Text style={texto.corpo}>
          Estudante de Ciência da Computação na UNICAP, com atuação em pesquisa
          científica aplicada à saúde, inteligência artificial e desenvolvimento
          web. Interesse em Ciência de Dados, IA/ML e Cibersegurança.
        </Text>
        <View style={styles.tecnologias}>
          <Tags itens={TECNOLOGIAS} />
        </View>
      </Section>

      <Section titulo="Contato">
        <View style={styles.linhasContato}>
          <View style={styles.linhaContato}>
            <Text style={texto.rotulo}>E-mail: </Text>
            <LinkExterno href={`mailto:${EMAIL}`}>{EMAIL}</LinkExterno>
          </View>
          <View style={styles.linhaContato}>
            <Text style={texto.rotulo}>GitHub: </Text>
            <LinkExterno href={GITHUB}>
              github.com/Gustavo-Henrique-glitch
            </LinkExterno>
          </View>
          <View style={styles.linhaContato}>
            <Text style={texto.rotulo}>LinkedIn: </Text>
            <LinkExterno href={LINKEDIN}>LinkedIn</LinkExterno>
          </View>
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topo: {
    paddingBottom: 32,
  },
  objetivo: {
    marginTop: 4,
  },
  contatoTopo: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 20,
  },
  itemContato: {
    flexDirection: "row",
    alignItems: "center",
  },
  divisor: {
    width: 1,
    height: 16,
    marginHorizontal: layout.espacoLateral,
    backgroundColor: cores.linha,
  },
  tecnologias: {
    marginTop: 20,
  },
  linhasContato: {
    gap: 8,
  },
  linhaContato: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
