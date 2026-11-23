import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

import { Screen } from "@/components/Screen";
import { LINHAS_TECLADO, MAX_ERROS } from "@/data/forca";
import { useForca } from "@/game/useForca";
import { cores, fontes, layout, texto } from "@/theme/tokens";

const TRACO = {
  stroke: cores.tinta,
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
} as const;

const ESPACO_TECLA = 6;
const COLUNAS_TECLADO = 7;

export default function Jogo() {
  const { palavra, corretas, erradas, venceu, perdeu, tentarLetra, reiniciar } =
    useForca();
  const { width } = useWindowDimensions();

  const erros = erradas.length;
  const fimDeJogo = venceu || perdeu;

  const lateral =
    width >= layout.larguraLarga
      ? layout.espacoLateralLargo
      : layout.espacoLateral;
  const larguraConteudo = Math.min(width, layout.larguraMaxima) - lateral * 2;
  const ladoTecla = Math.max(
    40,
    Math.min(
      48,
      Math.floor(
        (larguraConteudo - (COLUNAS_TECLADO - 1) * ESPACO_TECLA) /
          COLUNAS_TECLADO,
      ),
    ),
  );

  return (
    <Screen>
      <Text style={texto.nome}>Jogo da Forca</Text>
      <Text style={texto.subtitulo}>
        Adivinhe a palavra secreta relacionada a tecnologia e programação.
      </Text>

      <View style={styles.tabuleiro}>
        <View
          style={styles.colunaForca}
          accessible
          accessibilityRole="image"
          accessibilityLabel={`Forca com ${erros} de ${MAX_ERROS} erros`}
        >
          <Svg viewBox="0 0 220 250" width={200} height={227}>
            <Line x1={20} y1={230} x2={160} y2={230} {...TRACO} />
            <Line x1={60} y1={230} x2={60} y2={25} {...TRACO} />
            <Line x1={60} y1={25} x2={165} y2={25} {...TRACO} />
            <Line x1={60} y1={65} x2={100} y2={25} {...TRACO} />
            <Line x1={165} y1={25} x2={165} y2={55} {...TRACO} />

            {erros > 0 && <Circle cx={165} cy={72} r={17} {...TRACO} />}
            {erros > 1 && <Line x1={165} y1={89} x2={165} y2={148} {...TRACO} />}
            {erros > 2 && (
              <Line x1={165} y1={105} x2={140} y2={128} {...TRACO} />
            )}
            {erros > 3 && (
              <Line x1={165} y1={105} x2={190} y2={128} {...TRACO} />
            )}
            {erros > 4 && (
              <Line x1={165} y1={148} x2={142} y2={192} {...TRACO} />
            )}
            {erros > 5 && (
              <Line x1={165} y1={148} x2={188} y2={192} {...TRACO} />
            )}
          </Svg>
        </View>

        <View style={styles.colunaInfo}>
          <Text style={texto.meta}>
            Tentativas restantes: {MAX_ERROS - erros} de {MAX_ERROS}
          </Text>

          <View style={styles.palavra}>
            {palavra.split("").map((letra, indice) => (
              <View key={`${letra}-${indice}`} style={styles.espaco}>
                <Text style={styles.letraPalavra}>
                  {corretas.includes(letra) || perdeu ? letra : ""}
                </Text>
              </View>
            ))}
          </View>

          <Text style={[texto.auxiliar, styles.registro]}>
            Letras corretas:{" "}
            <Text style={styles.acertos}>
              {corretas.length > 0 ? corretas.join(" ") : "—"}
            </Text>
          </Text>
          <Text style={[texto.auxiliar, styles.registro]}>
            Letras erradas:{" "}
            <Text style={styles.erros}>
              {erradas.length > 0 ? erradas.join(" ") : "—"}
            </Text>
          </Text>
        </View>
      </View>

      {venceu && (
        <Text
          style={[styles.aviso, styles.avisoVitoria]}
          accessibilityRole="alert"
        >
          Você acertou! A palavra era {palavra}.
        </Text>
      )}

      {perdeu && (
        <Text
          style={[styles.aviso, styles.avisoDerrota]}
          accessibilityRole="alert"
        >
          Fim de jogo. A palavra era {palavra}.
        </Text>
      )}

      <View style={styles.teclado}>
        {LINHAS_TECLADO.map((linha, indice) => (
          <View key={`linha-${indice}`} style={styles.linhaTeclado}>
            {linha.map((letra) => {
              const acertou = corretas.includes(letra);
              const errou = erradas.includes(letra);
              return (
                <Pressable
                  key={letra}
                  accessibilityRole="button"
                  accessibilityLabel={`Letra ${letra}`}
                  accessibilityState={{ disabled: fimDeJogo || acertou || errou }}
                  disabled={fimDeJogo || acertou || errou}
                  onPress={() => tentarLetra(letra)}
                  style={({ pressed }) => [
                    styles.tecla,
                    { width: ladoTecla, height: ladoTecla },
                    acertou && styles.teclaCerta,
                    pressed && styles.teclaPressionada,
                  ]}
                >
                  <Text
                    style={[
                      styles.letraTecla,
                      { fontSize: Math.round(ladoTecla * 0.4) },
                      acertou && styles.letraCerta,
                      errou && styles.letraErrada,
                    ]}
                  >
                    {letra}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>

      <View style={styles.areaBotao}>
        <Pressable
          accessibilityRole="button"
          onPress={reiniciar}
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.textoBotao}>Reiniciar jogo</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tabuleiro: {
    marginTop: 32,
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: cores.linha,
    alignItems: "center",
    gap: 32,
  },
  colunaForca: {
    alignItems: "center",
  },
  colunaInfo: {
    width: "100%",
  },
  palavra: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 28,
  },
  espaco: {
    width: 26,
    minHeight: 42,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: cores.tinta,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  letraPalavra: {
    fontFamily: fontes.serifa,
    fontSize: 28,
    lineHeight: 32,
    color: cores.tinta,
  },
  registro: {
    marginTop: 6,
  },
  acertos: {
    fontFamily: fontes.media,
    letterSpacing: 0.8,
    color: cores.acerto,
  },
  erros: {
    fontFamily: fontes.media,
    letterSpacing: 0.8,
    color: cores.erro,
  },
  aviso: {
    marginTop: 28,
    padding: 16,
    borderWidth: 1,
    borderRadius: layout.raio,
    fontFamily: fontes.regular,
    fontSize: 16,
    lineHeight: 26,
  },
  avisoVitoria: {
    borderColor: cores.acerto,
    color: cores.acerto,
  },
  avisoDerrota: {
    borderColor: cores.erro,
    color: cores.erro,
  },
  teclado: {
    marginTop: 40,
    gap: 8,
  },
  linhaTeclado: {
    flexDirection: "row",
    justifyContent: "center",
    gap: ESPACO_TECLA,
  },
  tecla: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.papel,
    borderWidth: 1,
    borderColor: cores.linha,
    borderRadius: layout.raio,
  },
  teclaCerta: {
    borderColor: cores.acerto,
  },
  teclaPressionada: {
    backgroundColor: cores.papelSuave,
  },
  letraTecla: {
    fontFamily: fontes.regular,
    color: cores.tinta,
  },
  letraCerta: {
    color: cores.acerto,
  },
  letraErrada: {
    color: cores.tintaMedia,
    textDecorationLine: "line-through",
  },
  areaBotao: {
    marginTop: 24,
    alignItems: "center",
  },
  botao: {
    minHeight: 44,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: cores.papel,
    borderWidth: 1,
    borderColor: cores.linha,
    borderRadius: layout.raio,
  },
  botaoPressionado: {
    backgroundColor: cores.papelSuave,
  },
  textoBotao: {
    fontFamily: fontes.media,
    fontSize: 15,
    lineHeight: 22,
    color: cores.tinta,
  },
});
