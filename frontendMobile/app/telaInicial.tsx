import { UserContext } from "@/src/contexts/UserContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function TelaInicial() {
    const router = useRouter();
    const { name, setName } = useContext(UserContext);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#F5F5F5",
                padding: 24,
                gap: 16,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                Digite seu nome
            </Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Nome..."
                style={{
                    backgroundColor: "#035564",
                    borderWidth: 1,
                    borderColor: "#CCC",
                    borderRadius: 8,
                    padding: 12,
                }}
            />

            <Pressable
                onPress={() => router.push("/perfil")}
                style={{
                    backgroundColor: "#035564",
                    borderRadius: 8,
                    padding: 12,
                }}
            >
                <Text
                    style={{
                        color: "#00c725",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Ir para o perfil
                </Text>
            </Pressable>
        </View>
    );
}
