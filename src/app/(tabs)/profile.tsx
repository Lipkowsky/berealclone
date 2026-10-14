import { Text, View, StyleSheet, Platform } from "react-native";

import ColorPickerIOS from "@/components/color-picker.ios";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile scren</Text>

      {Platform.OS == "ios" && <ColorPickerIOS />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWroldTitle: {
    color: "red",
  },
  image: {
    width: 200,
    height: 200,
  },
});
