import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/src/constants/colors";

// Componente de cabeçalho para a aplicação
// Ele representa o titulo e uma descricao curta para o usuario

export default function Header() {
    return (
        <LinearGradient
            colors={[COLORS.primary, COLORS.secondary]}
            style={styles.headerContainer}
        >
            <View style={styles.badge}>
                <Text style={styles.badgeText}>API + React Native</Text>
            </View>
            <Text style={styles.title}>Pokedex</Text>
            <Text style={styles.subtitle}>
                Busque pokemons consumindo dados reais da PokeAPI
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 56,
        paddingBottom: 28,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    title: {
        color: COLORS.white,
        fontSize: 38,
        fontWeight: "900",
    },
    badge: {
        color: COLORS.white,
        fontWeight: "700",
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 16,
        marginTop: 8,
        opacity: 0.9,
        lineHeight: 22,
    },
    badgeText: {
        color: COLORS.white,
        fontSize: 38,
        fontWeight: "bold",
    },
});
