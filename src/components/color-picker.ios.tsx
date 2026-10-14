import { Text, View, StyleSheet } from "react-native";
import { ColorPicker, Host } from "@expo/ui/swift-ui";
import { useState } from "react";

export default function ColorPickerIOS() {
  const [color, setColor] = useState("#FF6347");
  return (
    <View style={styles.container}>
      <Host matchContents>
        <ColorPicker
          selection={color}
          onSelectionChange={setColor}
        ></ColorPicker>
      </Host>
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
