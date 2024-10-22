import { View, Text, ScrollView, FlatList } from "react-native";
import SearchInput from "../../components/SearchInput";
import TattooContainer from "../../components/TattooContainer";
import { dataContainer } from "@/dummyData/dataContainer";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 gap-2 text-xl bg-white px-4"
      contentContainerStyle={{ alignItems: "center" }}
    >
      <SearchInput />
      <FlatList
        className="w-full px-1"
        data={dataContainer}
        renderItem={({ item }) => (
          <TattooContainer
            id={item.id}
            name={item.name}
            specialties={item.specialties}
            tattoo={item.tattoo}
            price={item.price}
            image={item.image}
            rating={item.rating}
            profile={item.profile}
            like={item.like}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}
