import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { content } from '../../constants/content';
import { useRemoveSubscription } from '../../hooks/useRemoveSubscription';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootstack.type';

export function MainScreen() {
    const removeSubs = useRemoveSubscription();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const removeAndPushOnboarding = async () => {
      await removeSubs();
        navigation.replace('Onboarding');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Главный контент</Text>
            <FlatList
                data={content}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
            <TouchableOpacity onPress={removeAndPushOnboarding}>
                <Text>Удалить подписку</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#f3f4f6',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
    },
});
