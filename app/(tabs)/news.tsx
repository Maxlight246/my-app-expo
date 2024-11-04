import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import WebView from "react-native-webview";
import ViewContainer from "@/components/ViewContainer";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as WebBrowser from "expo-web-browser";

const News = () => {
  const webViewRef = useRef<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canForward, setCanForward] = useState(false);
  const backHandler = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };
  const forwardHandler = () => {
    if (webViewRef.current && canForward) {
      webViewRef.current.goForward();
    }
  };

  const handleNavigation = (event: any) => {
    console.log("=>(news.tsx:38) event", event);
    if (event.url !== "https://thisweekinreact.com/newsletter") {
      WebBrowser.openBrowserAsync(event.url);
      return false;
    }
    return true;
  };

  return (
    <ViewContainer backgroundColor={"#000"}>
      {canGoBack && (
        <View
          style={{
            width: "100%",
            height: 32,
            backgroundColor: "white",
            flexDirection: "row",
            paddingHorizontal: 8,
            paddingBottom: 4,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={backHandler}>
            <Ionicons name="arrow-back" size={32} />
          </TouchableOpacity>
          {canForward && (
            <TouchableOpacity onPress={forwardHandler}>
              <Ionicons name="arrow-forward" size={32} />
            </TouchableOpacity>
          )}
        </View>
      )}

      <WebView
        ref={webViewRef}
        style={{ flex: 1, marginBottom: canGoBack ? 32 : 0 }}
        source={{
          uri: "https://thisweekinreact.com/newsletter",
        }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator color="gray" size="large" style={styles.loading} />
        )}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCanForward(navState.canGoForward);
        }}
        onShouldStartLoadWithRequest={handleNavigation}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
export default News;
