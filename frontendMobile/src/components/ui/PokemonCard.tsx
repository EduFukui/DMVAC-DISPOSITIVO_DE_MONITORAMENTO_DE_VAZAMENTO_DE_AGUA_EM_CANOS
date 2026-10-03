import { COLORS } from "@/src/constants/colors";
import { PokemonDetails } from "@/src/types/Pokemon";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    pokemon: PokemonDetails;
};
// Card responsavel apenas por exibir as informacoes do pokemon
// a busca de dados da API nao e feita por aqui ainda iss deixa o componente mais limpo

export default function PokemonCard({ pokemon }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.imageBox}>
                <Image
                    source={{ uri: pokemon.image }}
                    style={styles.image}
                    resizeMode="contain"
                ></Image>
            </View>
            <View style={styles.content}>
                <Text style={styles.number}>
                    #{String(pokemon.id).padStart(3, "0")}
                </Text>
            </View>
            <View style={styles.typeContainer}></View>
            {pokemon.types.map((type) => (
                <Text key={type} style={styles.type}>
                    {type}
                </Text>
            ))}
            <View style={styles.infoRow}>
                <Text style={styles.info}>Nome: {pokemon.name}</Text>
                <Text style={styles.info}>Altura: {pokemon.height}</Text>
                <Text style={styles.info}>Peso: {pokemon.weight}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: COLORS.card,
        borderRadius: 24,
        padding: 14,
        marginHorizontal: 20,
        marginBottom: 14,
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    imageBox: {
        width: 92,
        height: 92,
        borderRadius: 22,
        backgroundColor: COLORS.input,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 82,
        height: 82,
    },
    content: {
        flex: 1,
        marginLeft: 14,
    },
    number: {
        color: COLORS.muted,
        fontWeight: "700",
        marginBottom: 2,
    },
    name: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: "900",
    },
    typeContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
        marginTop: 8,
    },
    type: {
        backgroundColor: "#000000",
        color: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        fontSize: 12,
        fontWeight: "800",
    },
    infoRow: {
        flexDirection: "row",
        gap: 12,
        marginTop: 10,
    },
    info: {
        color: COLORS.muted,
        fontSize: 12,
        fontWeight: "600",
    },
});
