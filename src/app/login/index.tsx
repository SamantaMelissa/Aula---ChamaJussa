import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native"
import { Button, ButtonText, Colors, Title, TitleLabel } from "../../constants/theme"
import { useRouter } from "expo-router"

// export const Login = () => {
export default function Login() {

  const router = useRouter();

  function acessar() {
    // alert("teste")
    //navigate e o push -> listagem de tela renderizadas
    //ou Adiciona uma nova tela em cima da pilha.
    // router.navigate("/listaOs")
    router.push("/listaOs")
    // login -> listaOs
    //replace -> Substitui a tela atual.
    // router.replace("/listaOs")
    // listaOs
  }

  return (
    <View style={estilos.container}>
      {/* <Image source={require('../../../assets/imgs/logo.svg')}
        style={estilos.logo}/> */}
      <Image source={require('../../../assets/imgs/logo.png')}
        style={estilos.logo} />

      <View style={estilos.form}>
        <View style={estilos.text}>
          <Text style={estilos.title}>Chama Jussa</Text>
          <Text style={estilos.subTitle}>Gerenciamento de Ordens de Serviço</Text>
        </View>
        <View style={estilos.inputGroup}>
          <Text style={estilos.label}>E-mail</Text>
          <TextInput style={estilos.input}
            placeholder="Digite seu e-mail"></TextInput>
        </View>
        <View style={estilos.inputGroup}>
          <Text style={estilos.label}>Senha</Text>
          <TextInput style={estilos.input}
            placeholder="Digite sua senha"
            secureTextEntry
          // keyboardType="numeric"
          // onChangeText={onChangeNumber}
          // value={number}
          ></TextInput>
        </View>
        <TouchableOpacity style={estilos.btnLogin} onPress={acessar}>
          <Text style={estilos.buttonText}>Acessar o sistema</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
// rafc -> comando para criar rápido
const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  logo: {
    width: 200,
    height: 200,
    // resizeMode: 'contain', // Garante que a imagem não fique distorcida
  },
  form: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    width: '100%',     // Ocupa a largura total em telas pequenas...
    maxWidth: 500,     // ...mas trava no máximo em 500px em telas maiores
    padding: 25,
    gap: 20,
    // justifyContent: 'space-evenly',

    // --- LÓGICA DA SOMBRA ---

    // 1. Para o Android (Usa um sistema baseado em níveis de elevação)
    elevation: 4,

    // 2. Para o iOS (Permite controle fino como no CSS web)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.1,                   // Opacidade/Intensidade
    shadowRadius: 8,                      // Nível de desfoque (blur)
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    // marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  inputGroup: {
    // Garante o espaçamento entre um bloco e outro
  },
  label: {
    ...TitleLabel
  },
  text: {
    alignItems: 'center'
  },
  title: {
    //puxa um de cada vez
    // fontSize: Title.fontSize,
    // fontWeight: Title.fontWeight,
    //puxa tudo
    ...Title,
    alignItems: 'center'

  },
  subTitle: {
    color: Colors.corTextoSecundario
  },
  btnLogin: {
    ...Button
  },
  buttonText: {
    alignSelf: 'center',
    ...ButtonText,
    // fontFamily: "Montserrat-Regular"
  }
});