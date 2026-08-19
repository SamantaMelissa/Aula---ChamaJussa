import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./cadastroOs.styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import useLocalizacao from "../../../hooks/useLocalizacao";
import ordemServicoService from "../../../services/ordemServicoService";
import { ImagemUpload } from "../../../@types";

export default function CadastroOs() {
  const router = useRouter();
  const { locais, loading: loadingLocais } = useLocalizacao();

  // Estados do formulário
  const [nomeItem, setNomeItem] = useState("");
  const [localSelecionado, setLocalSelecionado] = useState<number | string>("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<ImagemUpload | null>(null);
  const [salvando, setSalvando] = useState(false);

  // Selecionar foto da galeria
  async function escolherDaGaleria() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Precisamos de permissão para acessar suas fotos."
      );
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
      const asset = resultado.assets[0];
      setImagem({
        uri: asset.uri,
        name: asset.fileName || `foto_${Date.now()}.jpg`,
        mimeType: asset.mimeType || "image/jpeg",
      });
    }
  }

  // Tirar foto com a câmera
  async function tirarFoto() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Precisamos de permissão para acessar sua câmera."
      );
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
      const asset = resultado.assets[0];
      setImagem({
        uri: asset.uri,
        name: asset.fileName || `foto_${Date.now()}.jpg`,
        mimeType: asset.mimeType || "image/jpeg",
      });
    }
  }

  // Abrir diálogo de opções para foto
  function abrirOpcoesImagem() {
    Alert.alert("Adicionar Imagem", "Escolha a origem da foto do problema:", [
      { text: "Câmera", onPress: tirarFoto },
      { text: "Galeria", onPress: escolherDaGaleria },
      { text: "Cancelar", style: "cancel" },
    ]);
  }

  // Limpar formulário
  function limparFormulario() {
    setNomeItem("");
    setLocalSelecionado("");
    setDescricao("");
    setImagem(null);
  }

  // Submissão do formulário
  async function handleSubmit() {
    if (!nomeItem.trim()) {
      Alert.alert("Campo obrigatório", "Informe o título / nome do item ou máquina.");
      return;
    }

    if (!localSelecionado) {
      Alert.alert("Campo obrigatório", "Selecione o local / setor do problema.");
      return;
    }

    if (!descricao.trim()) {
      Alert.alert("Campo obrigatório", "Informe a descrição do problema.");
      return;
    }

    try {
      setSalvando(true);

      await ordemServicoService.criar({
        nomeItem: nomeItem.trim(),
        localizacaoId: Number(localSelecionado),
        descricao: descricao.trim(),
        imagem: imagem,
      });

      Alert.alert("Sucesso!", "Ordem de serviço cadastrada com sucesso.", [
        {
          text: "OK",
          onPress: () => {
            limparFormulario();
            router.push("/(tabs)/listaOs");
          },
        },
      ]);
    } catch (error: any) {
      console.error("Erro ao cadastrar OS:", error);
      const mensagem =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "Não foi possível cadastrar a ordem de serviço. Tente novamente.";
      Alert.alert("Erro ao cadastrar", typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem));
    } finally {
      setSalvando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Título Principal */}
      <Text style={styles.headerTitle}>Criar Ordem de Serviço</Text>

      {/* Card Principal */}
      <View style={styles.card}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Campo Nome do Item / Máquina */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Título / Máquina do problema *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Vazamento da pia / Ar condicionado"
              placeholderTextColor="#A0A0A0"
              value={nomeItem}
              onChangeText={setNomeItem}
            />
          </View>

          {/* Campo Local / Setor */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Local / Setor *</Text>
            <View style={styles.pickerContainer}>
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

          {/* Campo Descrição */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Descrição do problema *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Ex: Há um vazamento constante na tubulação..."
              placeholderTextColor="#A0A0A0"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>

          {/* Campo Imagem / Foto */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Imagem / Foto do problema</Text>
            {imagem ? (
              <View style={styles.imagePreviewContainer}>
                <Image
                  source={{ uri: imagem.uri }}
                  style={styles.imagePreview}
                  resizeMode="cover"
                />
                <View style={styles.imageActionsRow}>
                  <TouchableOpacity
                    style={styles.imageActionButton}
                    onPress={abrirOpcoesImagem}
                    activeOpacity={0.7}
                  >
                    <Feather name="camera" size={16} color="#4A5568" />
                    <Text style={styles.imageActionText}>Trocar foto</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.imageActionButton, styles.imageRemoveButton]}
                    onPress={() => setImagem(null)}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="trash-outline" size={16} color="#DC2626" />
                    <Text style={[styles.imageActionText, styles.imageRemoveText]}>Remover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.imagePickerButton}
                onPress={abrirOpcoesImagem}
                activeOpacity={0.7}
              >
                <View style={styles.imagePlaceholder}>
                  <Feather name="camera" size={28} color="#0878F9" />
                  <Text style={styles.imagePlaceholderText}>Clique para tirar foto ou enviar imagem</Text>
                  <Text style={styles.imagePlaceholderSubtext}>Câmera ou Galeria</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>

        {/* Botão de Ação */}
        <TouchableOpacity
          style={[styles.button, salvando && styles.buttonDisabled]}
          activeOpacity={0.7}
          onPress={handleSubmit}
          disabled={salvando}
        >
          {salvando ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Abrir Ordem de Serviço</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}