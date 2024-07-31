import { FlatList, Text, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useEffect, useMemo, useState } from "react";
import SearchInput from "../../components/SearchInput";
import TattooArtists from "../../dummyData/tattooArtists.json";
import TattooArtistListItem from "../../components/map/TattooArtistListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Icon() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [selectArtist, setSelectArtist] = useState(null);

  const snapPoints = useMemo(() => [80, "50%", "90%"], []);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
      setRegion({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.042,
      });
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
      }
    );
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex flex-1 items-center justify-center text-xl">
        <SearchInput />
        {location && (
          <MapView
            className="flex-1 w-full"
            provider={PROVIDER_GOOGLE}
            region={region}
            showsUserLocation
            showsMyLocationButton
            loadingEnabled
          >
            {TattooArtists.map((tattooArtist) => (
              <Marker
                onPress={() => setSelectArtist(tattooArtist)}
                key={tattooArtist.id}
                coordinate={{
                  latitude: tattooArtist.latitude,
                  longitude: tattooArtist.longitude,
                }}
                title={tattooArtist.name}
                description="Testing"
              >
                <View className="bg-white p-2 rounded-xl border border-gray-500">
                  <Text className="font-bold">{tattooArtist.name}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
        )}
        {selectArtist && (
          <TattooArtistListItem
            artist={selectArtist}
            containerStyle={{
              position: "absolute",
              bottom: 90,
              right: 20,
              left: 20,
            }}
          />
        )}

        <BottomSheet snapPoints={snapPoints} index={0} >
          <Text className="text-center font-bold text-xl mb-4 mt-2">
            Over {TattooArtists.length} places
          </Text>
          <BottomSheetFlatList
            data={TattooArtists}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <TattooArtistListItem artist={item} />}
          />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
