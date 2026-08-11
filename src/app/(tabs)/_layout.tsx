import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0878F9",
        tabBarInactiveTintColor: "#6B7280",
      }}
    >
      <Tabs.Screen
        name="listaOs/index"
        options={{
          title: "Lista de OS",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="list-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cadastroOs/index"
        options={{
          title: "Nova OS",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="add-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notificacoes/index"
        options={{
          title: "Notificações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="notifications-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}