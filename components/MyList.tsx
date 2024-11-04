import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

interface Props {
  data: any;
  styles?: StyleProp<ViewStyle | TextStyle>;
  contentContainerStyle?: StyleProp<ViewStyle | TextStyle>;
  scrollEnabled?: boolean;
  onPressItem?: (item: any) => void;
}

interface ItemProps {
  item: {
    id: string;
    title: string;
  };
}
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const renderItem = (
  props: ItemProps,
  onPressItem?: (item: any) => void,
  removeItem?: (item: any) => void
) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onPressItem && onPressItem(item)}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.id}</Text>
      {/*<Image*/}
      {/*  style={{ width: 50, height: 50 }}*/}
      {/*  source={{ uri: item.url }}*/}
      {/*  onLoad={() => console.log("Image loaded")}*/}
      {/*  onError={() => console.error("Image error")}*/}
      {/*  placeholder={{ blurhash }}*/}
      {/*/>*/}
    </TouchableOpacity>
  );
};

const MyList = ({
  data,
  styles,
  contentContainerStyle,
  scrollEnabled,
  onPressItem,
}: Props) => {
  return (
    <FlatList
      style={styles}
      data={data}
      renderItem={(item) => renderItem(item, onPressItem)}
      contentContainerStyle={contentContainerStyle}
      keyExtractor={(item) => item.id}
      scrollEnabled={scrollEnabled}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyList;
