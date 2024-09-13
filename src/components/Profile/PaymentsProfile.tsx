import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function PaymentsProfile({ navigation }) {
  const payments = [
    {
      page: "Formas de Pagamento",
    },
    {
      page: "Créditos e Cupons",
    },
    {
      page: "Histórico de Transações",
    },
    {
      page: "Doações",
    },
  ];

  return <View className="flex-1 mt-10 px-4">
      {payments.map((item, index) => (
          <View
            key={index}
            className="flex-row justify-between border-b border-gray-500 items-center p-1"
          >
            <Text className="ml-5 font-bold text-gray-500">{item.page}</Text>
            <Pressable onPress={() => navigation.navigate(item.page)}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={32}
                color="gray"
              />
            </Pressable>
          </View>
        ))}
  </View>;
}
