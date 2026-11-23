import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { usePathname, useRouter } from "expo-router";

import { cores, fontes, layout, texto } from "@/theme/tokens";

const LINKS = [
  { rotulo: "Início", href: "/" },
  { rotulo: "Sobre", href: "/sobre" },
  { rotulo: "Acadêmica", href: "/experiencia-academica" },
  { rotulo: "Profissional", href: "/experiencia-profissional" },
  { rotulo: "Projetos", href: "/projetos" },
  { rotulo: "Jogo da Forca", href: "/jogo" },
] as const;

export function Header() {
  const caminho = usePathname();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const largo = width >= layout.larguraLarga;

  return (
    <View style={styles.cabecalho}>
      <View
        style={[
          styles.conteudo,
          { paddingHorizontal: largo ? layout.espacoLateralLargo : layout.espacoLateral },
          largo && styles.conteudoLargo,
        ]}
      >
        <Pressable
          accessibilityRole="link"
          accessibilityLabel="Ir para a tela inicial"
          hitSlop={12}
          onPress={() => router.push("/")}
        >
          <Text style={styles.marca}>Gustavo H. M. Pinheiro</Text>
        </Pressable>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.navegacaoRolagem}
          contentContainerStyle={styles.navegacao}
        >
          {LINKS.map((link) => {
            const ativo = caminho === link.href;
            return (
              <Pressable
                key={link.href}
                accessibilityRole="link"
                accessibilityState={{ selected: ativo }}
                hitSlop={12}
                onPress={() => router.push(link.href)}
              >
                <Text style={[styles.link, ativo && styles.linkAtivo]}>
                  {link.rotulo}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    borderBottomWidth: 1,
    borderBottomColor: cores.linha,
    backgroundColor: cores.papel,
  },
  conteudo: {
    width: "100%",
    maxWidth: layout.larguraMaxima,
    alignSelf: "center",
    paddingVertical: 16,
    gap: 8,
  },
  conteudoLargo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  marca: {
    ...texto.rotulo,
    fontSize: 15,
    lineHeight: 22,
  },
  navegacaoRolagem: {
    flexGrow: 0,
    flexShrink: 1,
  },
  navegacao: {
    alignItems: "center",
    gap: 16,
    paddingRight: layout.espacoLateral,
  },
  link: {
    fontFamily: fontes.regular,
    fontSize: 13,
    lineHeight: 20,
    color: cores.tintaMedia,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    paddingBottom: 2,
  },
  linkAtivo: {
    fontFamily: fontes.media,
    color: cores.acento,
    borderBottomColor: cores.acento,
  },
});
