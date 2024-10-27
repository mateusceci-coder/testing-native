import { ImageSourcePropType } from "react-native";

export type TattooContainerType = {
  id: string;
  name: string;
  specialties: string;
  tattoo: string;
  price: number;
  image: ImageSourcePropType;
  rating: number;
  profile: ImageSourcePropType;
  like: boolean;
};
