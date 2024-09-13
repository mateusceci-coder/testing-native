import { Text, View } from "react-native";

export default function PaymentMethods() {
  return (
    <View className="justify-center items-center flex-1">
      <Text className="text-2xl font-bold">Formas de Pagamento</Text>
      <Text className="text-lg mt-4">
        Você ainda não cadastrou nenhuma forma de pagamento.
      </Text>
    </View>
  );
}
