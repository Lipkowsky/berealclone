import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { Image } from "expo-image";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image}
      />
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
