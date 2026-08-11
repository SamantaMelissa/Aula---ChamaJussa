import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones nativa do Expo
import { styles } from './Footer.styles';

export default function Footer() {
  return (
    <View style={styles.container}>
      {/* Item 1: Ativo (Azul) */}
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="clipboard-outline" size={24} color="#0085B2" />
        <Text style={[styles.label, styles.labelActive]}>Minhas OS</Text>
      </TouchableOpacity>

      {/* Item 2: Inativo (Cinza) */}
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="add-circle-outline" size={24} color="#6B7280" />
        <Text style={styles.label}>Criar OS</Text>
      </TouchableOpacity>

      {/* Item 3: Inativo (Cinza) */}
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="notifications-outline" size={24} color="#6B7280" />
        <Text style={styles.label}>Notificações</Text>
      </TouchableOpacity>

      {/* Item 4: Inativo (Cinza) */}
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="person-outline" size={24} color="#6B7280" />
        <Text style={styles.label}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}