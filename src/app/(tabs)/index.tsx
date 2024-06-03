import { View, Text } from "react-native";
import SearchInput from "../../components/SearchInput";
import TattooContainer from "../../components/TattooContainer";

export default function Index () {
  return (
    <View className="flex-1 gap-2 text-xl items-center bg-white pt-20">
        <SearchInput />
        <TattooContainer />
        <TattooContainer />
        <TattooContainer />
    </View>
  )
}