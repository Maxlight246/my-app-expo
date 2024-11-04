import { Link } from "expo-router";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import MyButton from "@/components/MyButton";
import { useState } from "react";

export default function HomeScreen() {
  const [text, setText] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link
        href={{
          pathname: "/image",
          params: { id: "Home" },
        }}
      >
        View details
      </Link>
      <Link href={"/ScrollScreen"}>Scroll Screen</Link>
      <Link href={"/StorageList"}>Storage List</Link>
      <Link href={"/ApiList"}>Api List</Link>
      <Button title={"Home"} onPress={() => {}} />
      <Pressable
        onPress={() => console.log("MyButton pressed")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightgray" : "blue",
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>Press Me</Text>
      </Pressable>

      <MyButton
        text={text}
        onPress={(data: string) => {
          // setText((prevText) => prevText + 1);
          console.log(data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
