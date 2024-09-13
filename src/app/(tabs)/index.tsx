import { View, Text, ScrollView, FlatList } from "react-native";
import SearchInput from "../../components/SearchInput";
import TattooContainer from "../../components/TattooContainer";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 gap-2 text-xl bg-white px-4"
      contentContainerStyle={{ alignItems: "center" }}
    >
      <SearchInput />
      <TattooContainer
        image={"../../public/bigTattoo.png"}
        name="Zé da Tainha"
        profile="../../../public/profile.png"
        price={1200}
        rating={4.5}
        specialties="Black Work, Oriental"
        tattoo="Fechamento de braço estilo oriental"
      />
      <TattooContainer
        image={"../../public/bigTattoo.png"}
        name="Zé da Tainha"
        profile="../../../public/profile.png"
        price={1200}
        rating={4.5}
        specialties="Black Work, Oriental"
        tattoo="Fechamento de braço estilo oriental"
      />
      <TattooContainer
        image={"../../public/bigTattoo.png"}
        name="Zé da Tainha"
        profile="../../../public/profile.png"
        price={1200}
        rating={4.5}
        specialties="Black Work, Oriental"
        tattoo="Fechamento de braço estilo oriental"
      />
    </ScrollView>
  );
}
