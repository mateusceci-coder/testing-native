import { View, Text, TextInput } from "react-native";

const LoginPage = () => {
  return (
    <View className="flex-1 items-center gap-4 p-2 mt-12">
      <Text className="text-4xl font-bold mb-10">Login</Text>
      <View className="w-4/5 mt-10">
        <View
          className=" bg-white py-8 px-4 rounded-xl"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text className="text-lg">Email</Text>
          <TextInput
            className="border-b-2 p-2"
            placeholder="Digite seu email"
          />
          <Text className="text-lg">Senha</Text>
          <TextInput
            className="border-b-2 p-2"
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
          <View className="flex-row justify-between mt-8">
            <Text className="text-blue-500">Esqueceu a senha?</Text>
            <Text className="text-blue-500">Cadastrar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
