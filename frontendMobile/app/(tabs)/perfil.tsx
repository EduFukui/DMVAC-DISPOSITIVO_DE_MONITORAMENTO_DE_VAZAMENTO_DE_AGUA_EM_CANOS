import { UserContext } from "@/src/contexts/UserContext";
import { router } from "expo-router";
import { useContext } from "react";
import { Pressable, Text, View } from 'react-native';

export default function Perfil() {
    const {name} = useContext(UserContext)

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F5F5F5',
            padding: 24,
            gap: 16
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold'
            }}>
                Perfil
            </Text>
            <Text style={{
                fontSize: 18
            }}>
                Nome do usuário: {name}
            </Text>
            <Pressable
            onPress={()=> router.back}
            style={{
                backgroundColor: '#222',
                padding: 14,
                borderRadius: 8
            }}
            >
                <Text style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    Voltar
                </Text>
            </Pressable>
        </View>
    )
}