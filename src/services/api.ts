import axios from "axios";
import { Platform } from "react-native";

//definndo o host local conforme plataforma(expo, web, ios)
const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const porta = process.env.EXPO_PUBLIC_PORTA;
//dessa forma, conseguimos rodar tanto na web quanto no emulador
const enderecoApi = process.env.EXPO_PUBLIC_API_URL || `http://${host}:${porta}`;

export const api = axios.create({
    baseURL: enderecoApi,
    timeout: 10000
});