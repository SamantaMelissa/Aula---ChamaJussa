// ANTES DE PASSAR O APP.TSX:

// import { Stack } from "expo-router"

// export default function RootLayout() {
//   return (
//     // stack -> pilha de telas
//     <Stack>
//         {/*stack.screen -> cada item da pilha/cada tela */}
//         {/*name -> o nome da pasta da tela
//         name="login/index"*/}
//         <Stack.Screen
//             name="login/index"
//             options={{
//                 title:"login",
//                 headerShown: false
//             }}
//         />
//         <Stack.Screen
//             name="listaOs/index"
//             options={{
//                 title:"Lista de OS"
                
//             }}
//         />
//     </Stack>
//   )
// }


import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { 
  Montserrat_400Regular, 
  Montserrat_600SemiBold, 
  Montserrat_700Bold, 
  useFonts 
} from '@expo-google-fonts/montserrat';

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="login/index"
          options={{
            title: "login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detalhesOs/index"
          options={{
            title: "Detalhes da OS",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

      </Stack>
    </SafeAreaProvider>
  );
}