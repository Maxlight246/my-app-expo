import React from "react";
import { View, Text } from "react-native";
import ViewContainer from "@/components/ViewContainer";

const Category = () => {
  return (
    <ViewContainer safeAreaView={true} backgroundColor={"green"}>
      <Text>Category</Text>
    </ViewContainer>
  );
};

export default Category;
