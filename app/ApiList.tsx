import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useFetch from "@/hooks/useFetch";
import MyList from "@/components/MyList";
import MyButton from "@/components/MyButton";
import ViewContainer from "@/components/ViewContainer";
import { awaitExpression } from "@babel/types";
import { createPostApi, getPostApi } from "@/api/post-api";

const ApiList = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const { state: statePosts, fetchData: fetchPosts } = useFetch(getPostApi.url);

  const { state: stateCreatePost, fetchData: fetchCreatePost } = useFetch(
    createPostApi.url,
    createPostApi.options(text, number)
  );

  const handleCreatePost = async () => {
    await fetchCreatePost();
  };

  console.log("posts", statePosts);
  console.log("create post", stateCreatePost);
  return (
    <ViewContainer
      safeAreaView={false}
      scrollViewVisible
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text>API List</Text>
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
      <MyButton text="Add" onPress={() => handleCreatePost()} />
      {stateCreatePost.data && <Text>{stateCreatePost.data.title}</Text>}
      {statePosts?.loading ? (
        <ActivityIndicator />
      ) : (
        <MyList data={statePosts?.data} scrollEnabled={false} />
      )}
      {statePosts?.error && <Text>{statePosts?.error}</Text>}
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
export default ApiList;
