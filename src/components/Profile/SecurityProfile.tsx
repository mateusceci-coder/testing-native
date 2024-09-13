import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, Button, TextInput } from "react-native";

export default function SecurityProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      senha: "*******",
      emailVerif: "Não verificado",
      telefoneVerif: "Não verificado",
      conta: "Conta atualmente ativa",
    },
  });

  const onSubmit = (data) => {
    console.log("Updated Data: ", data);
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    reset(); // Reseta os valores do formulário para os valores iniciais
    setIsEditing(false);
  };

  const formData = watch(); // Assiste os valores do formulário

  return (
    <View className="flex-1 px-4 mt-10">
      <View className="items-center">
        {!isEditing ? (
          <Button title="Editar Informações" onPress={handleEdit} />
        ) : (
          <View className="flex-row">
            <Button title="Confirmar" onPress={handleSubmit(onSubmit)} />
            <View style={{ width: 10 }} />
            <Button title="Cancelar" onPress={handleCancel} />
          </View>
        )}
      </View>
      <View className="mt-8">
        <View className="flex-row justify-between py-4 items-center border-b border-gray-500">
          <Text className="font-bold">Senha</Text>
          {isEditing ? (
            <Controller
              name="senha"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput value={value} onChangeText={onChange} />
              )}
            />
          ) : (
            <Text>{formData.senha}</Text>
          )}
        </View>
        <View className="flex-row justify-between py-4 items-center border-b border-gray-500">
          <Text className="font-bold">Verificação de Email</Text>
          {isEditing ? (
            <Controller
              name="emailVerif"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput value={value} onChangeText={onChange} />
              )}
            />
          ) : (
            <Text>{formData.emailVerif}</Text>
          )}
        </View>
        <View className="flex-row justify-between py-4 items-center border-b border-gray-500">
          <Text className="font-bold">Verificação de Telefone</Text>
          {isEditing ? (
            <Controller
              name="telefoneVerif"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput value={value} onChangeText={onChange} />
              )}
            />
          ) : (
            <Text>{formData.telefoneVerif}</Text>
          )}
        </View>
        <View className="flex-row justify-between py-4 items-center border-b border-gray-500">
          <Text className="font-bold">Conta</Text>
          {isEditing ? (
            <Controller
              name="conta"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput value={value} onChangeText={onChange} />
              )}
            />
          ) : (
            <Text>{formData.conta}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
