import React, { useRef } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  text: string | number;
  onPress?: (data: string) => void;
  styleContainer?: StyleProp<ViewStyle>;
}

const MyButton: React.FC<Props> = ({ onPress, text, styleContainer }) => {
  const lastPress = useRef(0); // Ref to store the last press timestamp

  const handlePress = () => {
    const currentTime = Date.now(); // Current timestamp

    // Check if enough time has passed since the last press
    if (currentTime - lastPress.current > 500) {
      // Adjust the time threshold as needed
      lastPress.current = currentTime; // Update last press timestamp
      if (onPress) {
        onPress("Form Children Data");
      } // Call the onPress function
    }
  };

  return (
    <TouchableOpacity
      style={styleContainer}
      disabled={!onPress}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    padding: 10,
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    textAlign: "center",
    borderRadius: 5,
  },
});

export default MyButton;
