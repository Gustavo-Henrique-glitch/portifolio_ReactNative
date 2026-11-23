import { Linking, Pressable, StyleSheet, Text } from "react-native";
import type { StyleProp, TextStyle } from "react-native";

import { texto } from "@/theme/tokens";

type Props = {
  href: string;
  children: string;
  style?: StyleProp<TextStyle>;
};

export function LinkExterno({ href, children, style }: Props) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={children}
      accessibilityHint="Abre o link fora do aplicativo"
      hitSlop={12}
      onPress={() => {
        void Linking.openURL(href);
      }}
      style={({ pressed }) => (pressed ? styles.pressionado : null)}
    >
      <Text style={[texto.link, style]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressionado: {
    opacity: 0.6,
  },
});
