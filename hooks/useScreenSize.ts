import React, { useState } from "react";
import { Dimensions } from "react-native";

function useScreenSize() {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  return { width, height };
}

export default useScreenSize;
