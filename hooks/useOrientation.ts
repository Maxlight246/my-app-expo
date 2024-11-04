import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

function useOrientation() {
  const [orientation, setOrientation] = useState("PORTRAIT");

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get("window");
      if (width < height) {
        setOrientation("PORTRAIT");
      } else {
        setOrientation("LANDSCAPE");
      }
    };
    const subscription = Dimensions.addEventListener(
      "change",
      handleOrientationChange
    );
    handleOrientationChange();

    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
}

export default useOrientation;
