import { SafeAreaView as SafeAreaView11, Platform } from "react-native";

import SafeAreaViewIOS10 from "./SafeAreaViewIOS10";

const SafeAreaView =
  Platform.OS === "ios" && parseInt(Platform.Version, 10) < 11
    ? SafeAreaViewIOS10
    : SafeAreaView11;

export default SafeAreaView;
