import { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ErrorMessage from "@/src/components/ui/ErrorMessage";
import Loading from "@/src/components/ui/Loading";
import PokemonCard from "@/src/components/ui/PokemonCard";

import Header from "@/src/components/ui/Hearder";
import SearchBar from "@/src/components/ui/SearchBar";
import { COLORS } from "@/src/constants/colors";
import { getPokemonWithDetails } from "@/src/services/pokemonApi";
import { PokemonDetails } from "@/src/types/Pokemon";
import { SafeAreaView } from "react-native-safe-area-context";

// Tela principais do app
// Aqui usamos useState, useEffect, consumo da API e o buscar

export default function HomeScreen() {
    const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadPokemons() {
        try {
            setError("");
            setIsLoading(true);
            const list = await getPokemonWithDetails(2000);
            setPokemons(list);
        } catch (error) {
            setError("Verifique sua internet e tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        loadPokemons();
    }, []);

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase()),
        );
    }, [pokemons, search]);
    return (
        <SafeAreaView style={styles.SafeArea} edges={["left", "right"]}>
            <Header></Header>
            <SearchBar value={search} onChangeText={setSearch}></SearchBar>
            {isLoading && <Loading></Loading>}
            {!isLoading && error.length > 0 && (
                <ErrorMessage
                    message={error}
                    onTryAgain={loadPokemons}
                ></ErrorMessage>
            )}
            {!isLoading && error.length === 0 && (
                <FlatList
                    data={filteredPokemons}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.resultBox}>
                            <Text style={styles.resultText}>
                                {filteredPokemons.length} Pokemon(s)
                                Encontrado(s)
                            </Text>
                        </View>
                    }
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>
                            Nenhum Pokemon encontrado com esse nome
                        </Text>
                    }
                ></FlatList>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    list: {
        paddingHorizontal: 18,
        paddingBottom: 28,
    },
    resultText: {
        fontSize: 15,
        color: COLORS.white,
        fontWeight: "700",
    },
    resultBox: {
        marginBottom: 14,
        marginHorizontal: 20,
    },
    emptyText: {
        fontSize: 15,
        color: COLORS.white,
        textAlign: "center",
        marginTop: 40,
        fontWeight: "700",
    },
});
