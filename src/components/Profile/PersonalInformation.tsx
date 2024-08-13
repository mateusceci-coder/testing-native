import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function PersonalInformation() {
  const initialInformations = [
    {
      title: "Nome",
      value: "João Manezinho",
    },
    {
      title: "Nome de Preferência",
      value: "Sardona",
    },
    {
      title: "Número de Telefone",
      value: "+55 11 99999-9999",
    },
    {
      title: "Email",
      value: "xxxxx@email.com",
    },
    {
      title: "Endereço",
      value: "Não fornecido",
    },
    {
      title: "Contato de Emergência",
      value: "Não fornecido",
    },
    {
      title: "Documento de identificação oficial",
      value: "Não fornecido",
    },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [editedInformations, setEditedInformations] = useState([
    ...initialInformations,
  ]);

  const handleInputChange = (text, index) => {
    const newInformations = [...editedInformations];
    newInformations[index].value = text;
    setEditedInformations(newInformations);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleConfirm = () => {
    setIsEditing(false);
  };

  return (
    <View className="flex-1 pt-12 px-4">
      <View className="items-center">
        {!isEditing ? (
          <Button title="Editar Informações" onPress={handleEdit} />
        ) : (
          <View className="flex-row">
            <Button title="Confirmar" onPress={handleConfirm} />
            <View style={{ width: 10 }} />
            <Button title="Cancelar" onPress={handleCancel} />
          </View>
        )}
      </View>
      <View className="mt-8">
        {editedInformations.map((info, index) => (
          <View
            key={index}
            className="flex-row justify-between py-4 items-center border-b border-gray-500"
          >
            <Text className="font-bold">{info.title}</Text>
            {isEditing ? (
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 5,
                  flex: 1,
                  marginLeft: 10,
                }}
                value={info.value}
                onChangeText={(text) => handleInputChange(text, index)}
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
