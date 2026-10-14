import { Text, View, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { Button, Host } from "@expo/ui/swift-ui";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWroldTitle}>Hello World</Text>

      <TextInput placeholder="Email" />

      <Host>
        <Button onPress={() => router.push("/about")}>
          <Text>Navigate to About</Text>
        </Button>
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
