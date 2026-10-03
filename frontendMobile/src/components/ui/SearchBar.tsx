import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/src/constants/colors";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
    value: string;
    onChangeText: (text: string) => void;
};

// Componente de busca
// Recebe o valor do input e a função de altereação por props

export default function SearchBar({ value, onChangeText }: Props) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={22} color={COLORS.muted} />
            <TextInput
                style={styles.input}
                placeholder="Buscar pokemons..."
                placeholderTextColor={COLORS.muted}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize="none"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.input,
        borderRadius: 18,
        paddingHorizontal: 16,
        marginTop: -24,
        marginHorizontal: 20,
        height: 56,
        gap: 10,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
    },
});
