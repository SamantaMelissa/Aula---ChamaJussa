import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login, LoginResponse } from "../@types/autenticacao";
import { api } from "./api";

export const autenticacaoService = {
    // async function login(){
    // }
    async login(dados : Login) : Promise<LoginResponse>{
        //com essas {} ele muda o tipo da "data" para LoginResponse
        const {data} = await api.post<LoginResponse>("Autenticacao/login", dados);
        if(data.token){
            //token -> "localstorage" (só que no react native)
            await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY, data.token)
        }
        return data;
    }
}