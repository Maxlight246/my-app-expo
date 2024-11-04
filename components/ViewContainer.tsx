import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

interface Props {
  children: React.ReactNode;
  safeAreaView?: boolean;
  styles?: StyleProp<ViewStyle>;
  scrollViewVisible?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
}

const ViewContainer = ({
  children,
  safeAreaView = true,
  styles,
  scrollViewVisible = false,
  contentContainerStyle,
  backgroundColor = "#fff",
}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: safeAreaView ? insets.top : 0,
          backgroundColor,
        },
      ]}
    >
      <StatusBar style="dark" />
      {scrollViewVisible ? (
        <ScrollView
          style={styles}
          contentContainerStyle={contentContainerStyle}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[{ flex: 1 }, styles]}>{children}</View>
      )}
    </View>
  );
};

export default ViewContainer;
