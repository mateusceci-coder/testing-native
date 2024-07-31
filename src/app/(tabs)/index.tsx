import { View, Text, ScrollView } from "react-native";
import SearchInput from "../../components/SearchInput";
import TattooContainer from "../../components/TattooContainer";

export default function Index () {
  return (
    <ScrollView className="flex-1 gap-2 text-xl bg-white">
        <SearchInput />
        <TattooContainer />
        <TattooContainer />
        <TattooContainer />
    </ScrollView>
  )
}