import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './listaOs.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDetalheOS } from '../../hooks/useDetalheOs';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetalheOS() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { os, dataFormatada, osIdentificador } = useDetalheOS(id);
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
                </TouchableOpacity>
                {/* Título Principal */}
                <Text style={styles.headerTitle}>Detalhes da {osIdentificador}</Text>
            </View>


            {/* Card Principal */}
            <View style={styles.card}>
                {/* Se você tentar aplicar um padding: 20 usando a propriedade style comum em um ScrollView, a barra de rolagem vai cortar visualmente ou o comportamento de scroll pode quebrar nas extremidades. */}
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>{os?.nomeItem}</Text>
                    <Text style={styles.date}>Criada em {dataFormatada}</Text>

                    {/* Item: Máquina / Equipamento */}
                    {/* <View style={styles.infoRow}>
                        <Entypo name="tools" size={24} color="#006FFF" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Máquina / Equipamento</Text>
                            <Text style={styles.value}></Text>
                        </View>
                    </View> */}

                    {/* Item: Local / Setor */}
                    <View style={styles.infoRow}>
                        <Ionicons name="location-outline" size={22} color="#FF3B30" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Local / Setor</Text>
                            <Text style={styles.value}>{os?.localizacaoNome}</Text>
                        </View>
                    </View>

                    {/* Item: Solicitante */}
                    <View style={styles.infoRow}>
                        <Feather name="user" size={20} color="#34C759" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Solicitante</Text>
                            <Text style={styles.value}>{os?.solicitanteNome}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* Descrição */}
                    <Text style={styles.sectionTitle}>Descrição do Problema</Text>
                    <Text style={styles.descriptionText}>
                        {os?.descricao}
                    </Text>

                    {/* Foto */}
                    <Text style={styles.sectionTitle}>Foto do Problema</Text>
                    <Image
                        // source={{uri:'http://10.0.2.2:5015'+ os?.imagem}}
                        source={{ uri: process.env.EXPO_PUBLIC_API_IMG_URL + os?.imagem }}
                        style={styles.problemImage}
                        resizeMode="cover"
                    />
                </ScrollView>
            </View>

            {/* Botão de Ação */}
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Editar Solicitação</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
}