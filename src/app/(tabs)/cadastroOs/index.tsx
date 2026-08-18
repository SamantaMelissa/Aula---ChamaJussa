import { ScrollView, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./cadastroOs.styles";
import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import useLocalizacao from "../../../hooks/useLocalizacao";

export default function CadastroOs() {
  const [localSelecionado, setLocalSelecionado] = useState<number | string>("");
  const { locais, loading: loadingLocais } = useLocalizacao();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Título Principal */}
      <Text style={styles.headerTitle}>Criar Ordem de Serviço</Text>


      {/* Card Principal */}
      <View style={styles.card}>
        {/* Se você tentar aplicar um padding: 20 usando a propriedade style comum em um ScrollView, a barra de rolagem vai cortar visualmente ou o comportamento de scroll pode quebrar nas extremidades. */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Título do problema *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Vazamento da pia"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Máquina / Equipamento *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Tubulação/Sifão da Pia"
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Local / Setor *</Text>
            <View style={styles.pickerContainer}>
              {/* https://docs.expo.dev/versions/latest/sdk/picker/ ->  */}
              <Picker
                selectedValue={localSelecionado}
                onValueChange={(itemValue) => setLocalSelecionado(itemValue)}
                dropdownIconColor="#666"
                style={styles.picker}
              >
                <Picker.Item
                  label={loadingLocais ? "Carregando locais..." : "Selecione o local/setor..."}
                  value=""
                  color="#A0A0A0"
                />
                {locais.map((local) => {
                  const label = local.andar ? `${local.nome} - ${local.andar}` : local.nome;
                  return (
                    <Picker.Item
                      key={String(local.localizacao_id)}
                      label={label}
                      value={local.localizacao_id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Descrição do problema *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Ex: Há um vazamento constante..."
              placeholderTextColor="#A0A0A0"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Imagem / Foto do problema *</Text>
            <TouchableOpacity>
              <View style={styles.imagePlaceholder}>
                <Feather name="camera" size={20} color="#8E8E93" />
                <Text style={styles.imagePlaceholderText}>Insira imagem</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* Botão de Ação */}
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Abrir Ordem de Serviço</Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  )
}