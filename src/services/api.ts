// src/services/api.ts
import axios from 'axios';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define o host local direto pela plataforma
const HOST = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const BASE_URL = process.env.EXPO_PUBLIC_API_URL || `http://${HOST}:5015`;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Injeta o token se existir
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@chama_jussa:token');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;