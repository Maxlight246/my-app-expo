import React, { useEffect, useState } from "react";
import ViewContainer from "@/components/ViewContainer";
import { Text, TextInput, StyleSheet, ScrollView } from "react-native";
import MyButton from "@/components/MyButton";
import MyList from "@/components/MyList";
import useStorage from "@/hooks/useStorage";
import useFetch from "@/hooks/useFetch";

interface DataItem {
  id: string;
  title: string;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

const StorageList = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [currentItem, setCurrentItem] = useState<DataItem | null>(null);
  const [data, setData] = React.useState<DataItem[]>([]);
  const { state, writeItemToStorage } = useStorage("@list", []);
  // const dataFetch = useFetch(url);

  useEffect(() => {
    if (!state.loading) {
      setData(state.data);
      return;
    }
  }, [state]);

  const addData = () => {
    const newData = {
      id: number,
      title: text,
    };
    setData([newData, ...data]);
    writeItemToStorage([newData, ...data]).then((r) => {});
  };

  const updateData = () => {
    const newData = {
      id: number,
      title: text,
    };
    const itemIndex = data.findIndex((item) => item.id === currentItem?.id);
    if (itemIndex !== -1) {
      data[itemIndex] = newData;
      setData([...data]);
      writeItemToStorage([...data]).then((r) => {});
    }
  };

  const onPressItem = (item: DataItem) => {
    onChangeText(item.title);
    onChangeNumber(item.id);
    setCurrentItem(item);
  };

  const onPressDeleteItem = () => {
    const itemIndex = data.findIndex((item) => item.id === currentItem?.id);
    console.log("=>(StorageList.tsx:62) itemIndex", itemIndex);
    if (itemIndex !== -1) {
      const newData = [...data];
      newData.splice(itemIndex, 1);
      setCurrentItem(null); // reset current item
      onChangeText("");
      onChangeNumber(""); // reset input values after deleting item from list
      setData(newData);
      writeItemToStorage(newData).then((r) => {});
    }
  };

  return (
    <ViewContainer
      safeAreaView={false}
      contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}
      scrollViewVisible
    >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
        placeholderTextColor="gray"
        multiline
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless Number"
        keyboardType="numeric"
        placeholderTextColor="gray"
      />

      <MyButton text="Add" onPress={addData} />
      <MyButton
        styleContainer={{ marginTop: 10 }}
        text="update"
        onPress={updateData}
      />
      <MyButton
        styleContainer={{ marginTop: 10 }}
        text="Remove"
        onPress={onPressDeleteItem}
      />

      <MyList data={data} scrollEnabled={false} onPressItem={onPressItem} />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default StorageList;
