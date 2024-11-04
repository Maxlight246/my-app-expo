import React from "react";
import { StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import ViewContainer from "@/components/ViewContainer";
import useScreenSize from "@/hooks/useScreenSize";
import useOrientation from "@/hooks/useOrientation";

const ScrollScreen = () => {
  const { width, height } = useScreenSize();
  console.log("=>(ScrollScreen.tsx:8) height", height);
  console.log("=>(ScrollScreen.tsx:8) width", width);
  const orientation = useOrientation();
  console.log("=>(ScrollScreen.tsx:12) orientation", orientation);
  return (
    <ViewContainer safeAreaView={true} backgroundColor={"green"}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum
          mi ut urna scelerisque, vel sollicitudin ante molestie. Vestibulum
          rhoncus vulputate urna, in tincidunt ex ultricies sed. Phasellus vel
          venenatis est. Nullam at convallis justo. Morbi ac libero mollis,
          pulvinar mauris vel, sollicitudin nibh. Etiam fermentum quam vehicula
          purus tempor congue. Sed lobortis scelerisque libero, ac rhoncus velit
          ultrices eget. Sed nec sapien massa. Aenean eget magna eu arcu egestas
          pharetra congue id magna. Duis ut posuere turpis, in malesuada leo.
          Nam tincidunt tortor rhoncus egestas faucibus. Vivamus eleifend non
          ligula quis mollis. Sed blandit est id neque vulputate, nec convallis
          neque ornare. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed et lorem dapibus, ornare
          odio ut, dignissim justo. Etiam vel posuere augue. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
          condimentum velit nunc, vel dapibus ipsum ultrices non. Vestibulum
          interdum ut dolor a sagittis. Ut interdum, purus vel consequat
          imperdiet, odio arcu pulvinar metus, id sagittis massa leo id elit.
          Sed imperdiet mi id orci varius ultricies. Pellentesque vitae eros sit
          amet turpis fermentum sodales. Etiam at ligula blandit, aliquet quam
          ac, condimentum leo. Morbi consequat non sapien nec eleifend. Maecenas
          nec interdum libero. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin tempus tempus est. In hac habitasse platea
          dictumst. Suspendisse ut tellus fermentum, mollis arcu ut, vulputate
          libero. Duis non nisi consectetur, eleifend ligula eu, dapibus est.
          Pellentesque luctus, mauris non tincidunt volutpat, quam arcu laoreet
          enim, ut sollicitudin nunc massa at lorem. Donec ut dui a lectus
          porttitor porta. Fusce in sapien non risus auctor gravida. Quisque
          mattis enim felis, eget semper leo vehicula sit amet. Praesent cursus
          lorem diam, et vehicula ex blandit nec. Nam pellentesque velit sit
          amet nunc tristique lacinia ut et quam. Nullam a est tempus, elementum
          orci ut, aliquam odio. Vivamus non dui quam. Vestibulum facilisis
          finibus nibh a cursus. Praesent a pharetra eros. Sed a est ipsum.
          Morbi lacinia malesuada est, sit amet elementum nisl accumsan a.
          Quisque vitae ex vehicula, tempor turpis sit amet, vehicula magna.
          Proin at euismod neque. Proin laoreet nibh non aliquet viverra.
          Integer placerat viverra orci et commodo. Sed feugiat sem nulla,
          lacinia pharetra metus tristique at. Pellentesque mollis feugiat
          dolor, sit amet euismod elit tincidunt ut. Nam tempus dolor sed orci
          fermentum, non pharetra odio dictum. Aliquam nec libero euismod,
          placerat augue at, feugiat mi. Donec nec massa elementum, volutpat
          lacus ut, consequat risus. Proin sodales nunc eu massa tincidunt
          mollis. Quisque id tortor finibus, faucibus mi ac, sodales purus.
        </Text>
      </ScrollView>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: "pink",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
  },
});
export default ScrollScreen;
