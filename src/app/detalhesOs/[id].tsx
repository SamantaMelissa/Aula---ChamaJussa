import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { styles } from './listaOs.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { OrdemServico } from '../../@types';
import ordemServicoService from '../../services/ordemServicoService';

export default function DetalheOS() {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();

    const [ordem, setOrdem] = useState<OrdemServico | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function carregarDetalhes() {
        if (!id) {
            setError('ID da ordem de serviço não fornecido.');
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const dados = await ordemServicoService.buscarPorId(id);
            setOrdem(dados);
        } catch (err: any) {
            console.error('Erro ao buscar detalhes da OS:', err);
            const mensagem =
                err.response?.data?.message ||
                err.response?.data ||
                'Não foi possível carregar os detalhes da ordem de serviço.';
            setError(typeof mensagem === 'string' ? mensagem : JSON.stringify(mensagem));
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarDetalhes();
    }, [id]);

    // Formatação de data
    const formatarData = (dataStr?: string) => {
        if (!dataStr) return '';
        try {
            const data = new Date(dataStr);
            if (isNaN(data.getTime())) return dataStr;
            return data.toLocaleString('pt-BR');
        } catch {
            return dataStr;
        }
    };

    // Montagem do endereço da imagem
    const getImagemUrl = (img?: string) => {
        if (!img) return null;
        if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('data:')) {
            return img;
        }
        const apiBase = (process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5015/api/').replace(/\/api\/?$/, '');
        return `${apiBase}/${img.replace(/^\//, '')}`;
    };

    const osIdentificador = ordem?.osId
        ? `OS-${String(ordem.osId).padStart(3, '0')}`
        : id
        ? `OS-${String(id).padStart(3, '0')}`
        : 'OS';

    if (loading) {
        return (
            <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Detalhes da {osIdentificador}</Text>
                </View>
                <View style={styles.centerContainer}>
                    <ActivityIndicator size="large" color="#0878F9" />
                    <Text style={styles.loadingText}>Carregando detalhes da OS...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (error || !ordem) {
        return (
            <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Detalhes da OS</Text>
                </View>
                <View style={styles.centerContainer}>
                    <Text style={styles.errorText}>{error || 'Ordem de serviço não encontrada.'}</Text>
                    <TouchableOpacity
                        style={[styles.button, { marginTop: 12 }]}
                        onPress={carregarDetalhes}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Tentar novamente</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    const imagemUrl = getImagemUrl(ordem.imagem);

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            {/* Cabeçalho com botão Voltar */}
            <View style={styles.headerRow}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detalhes da {osIdentificador}</Text>
            </View>

            {/* Card Principal */}
            <View style={styles.card}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {/* Título e Status */}
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{ordem.nomeItem}</Text>
                        {ordem.statusNome ? (
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>{ordem.statusNome}</Text>
                            </View>
                        ) : null}
                    </View>

                    {ordem.dtCriacao ? (
                        <Text style={styles.date}>Criada em {formatarData(ordem.dtCriacao)}</Text>
                    ) : null}

                    {/* Item: Máquina / Equipamento */}
                    <View style={styles.infoRow}>
                        <Entypo name="tools" size={24} color="#0878F9" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Máquina / Equipamento</Text>
                            <Text style={styles.value}>{ordem.nomeItem || 'Não informado'}</Text>
                        </View>
                    </View>

                    {/* Item: Local / Setor */}
                    <View style={styles.infoRow}>
                        <Ionicons name="location-outline" size={22} color="#FF3B30" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Local / Setor</Text>
                            <Text style={styles.value}>{ordem.localizacaoNome || 'Não informado'}</Text>
                        </View>
                    </View>

                    {/* Item: Solicitante */}
                    <View style={styles.infoRow}>
                        <Feather name="user" size={20} color="#34C759" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Solicitante</Text>
                            <Text style={styles.value}>{ordem.solicitanteNome || 'Não informado'}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* Descrição */}
                    <Text style={styles.sectionTitle}>Descrição do Problema</Text>
                    <Text style={styles.descriptionText}>
                        {ordem.descricao || 'Sem descrição informada.'}
                    </Text>

                    {/* Foto */}
                    <Text style={styles.sectionTitle}>Foto do Problema</Text>
                    {imagemUrl ? (
                        <Image
                            source={{ uri: imagemUrl }}
                            style={styles.problemImage}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={styles.noImageContainer}>
                            <Feather name="image" size={32} color="#CBD5E1" />
                            <Text style={styles.noImageText}>Nenhuma foto anexada a esta OS</Text>
                        </View>
                    )}
                </ScrollView>
            </View>

            {/* Botão de Ação Voltar */}
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => router.back()}
            >
                <Text style={styles.buttonText}>Voltar para Lista</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
