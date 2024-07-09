import { View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useEffect, useState } from "react";

export default function Icon() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [region, setRegion] = useState<Region | undefined>(undefined);

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
    <View className="flex flex-1 items-center justify-center text-xl">
      {location && (
        <MapView
          className="flex-1 w-full"
          provider={PROVIDER_GOOGLE}
          region={region}
          showsUserLocation
          showsMyLocationButton
          loadingEnabled
        />
      )}
    </View>
  );
}
