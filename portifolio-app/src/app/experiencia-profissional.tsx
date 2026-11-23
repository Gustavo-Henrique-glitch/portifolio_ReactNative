import { StyleSheet, View } from "react-native";

import { Entrada } from "@/components/Entrada";
import { Screen } from "@/components/Screen";
import { Section } from "@/components/Section";
import { EXPERIENCIA } from "@/data/perfil";

export default function ExperienciaProfissional() {
  return (
    <Screen>
      <Section titulo="Experiência e projetos técnicos">
        <View style={styles.lista}>
          {EXPERIENCIA.map((item) => (
            <Entrada
              key={item.titulo}
              titulo={item.titulo}
              contexto={item.contexto}
              descricao={item.descricao}
            />
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  lista: {
    gap: 32,
  },
});
