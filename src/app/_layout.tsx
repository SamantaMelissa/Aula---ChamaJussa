import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    // stack -> pilha de telas
    <Stack>
        {/*stack.screen -> cada item da pilha/cada tela */}
        {/*name -> o nome da pasta da tela
        name="login/index"*/}
        <Stack.Screen
            name="login/index"
            options={{
                title:"login",
                headerShown: false
            }}
        />
        <Stack.Screen
            name="listaOs/index"
            options={{
                title:"Lista de OS"
                
            }}
        />
    </Stack>
  )
}
