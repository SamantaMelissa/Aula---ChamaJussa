import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Login from './src/app/login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';

export default function App() {

  const[loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  if(!loaded){
    return null;
  }

  return (
    // SafeAreaProvider -> calcular o tamanho das extremidades (topo e rodapé)
    // SafeAreaView -> aplica o padrão de margem necessária para o tamanho do celular
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <StatusBar style='dark'/>
        {/* <StatusBar style='light'/> */}
        {/* <StatusBar style='auto'/> */}
        <Login/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeareaview:{
    flex: 1,
    backgroundColor: "#F3F4F6"
  }
});
