import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInformationSchema } from "../../../lib/schemas";

export default function PersonalInformation() {
  const initialInformations = [
    { title: "Nome", value: "João Manezinho", name: "nome" },
    { title: "Nome de Preferência", value: "Sardona", name: "nomePreferencia" },
    {
      title: "Número de Telefone",
      value: "+55 11 99999-9999",
      name: "telefone",
    },
    { title: "Email", value: "xxxxx@email.com", name: "email" },
    { title: "Endereço", value: "Não fornecido", name: "endereco" },
    {
      title: "Contato de Emergência",
      value: "Não fornecido",
      name: "contatoEmergencia",
    },
    {
      title: "Documento de identificação oficial",
      value: "Não fornecido",
      name: "documento",
    },
  ];

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: initialInformations.reduce(
      (acc, item) => ({ ...acc, [item.name]: item.value }),
      {}
    ),
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    reset();
  };

  const handleConfirm = (data) => {
    console.log("Dados confirmados:", data);
    setIsEditing(false);
  };

  return (
    <View className="flex-1 mt-12 px-4">
      <View className="items-center">
        {!isEditing ? (
          <Button title="Editar Informações" onPress={handleEdit} />
        ) : (
          <View className="flex-row">
            <Button title="Confirmar" onPress={handleSubmit(handleConfirm)} />
            <View style={{ width: 10 }} />
            <Button title="Cancelar" onPress={handleCancel} />
          </View>
        )}
      </View>
      <View className="mt-8">
        {initialInformations.map((info, index) => (
          <View
            key={index}
            className="flex-row justify-between py-4 items-center border-b border-gray-500"
          >
            <Text className="font-bold">{info.title}</Text>
            {isEditing ? (
              <Controller
                name={info.name}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput value={value} onChangeText={onChange} />
                )}
              />
            ) : (
              <Text>{info.value}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
