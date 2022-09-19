import * as React from "react";
import MapView, {
  PROVIDER_GOOGLE,
  enableLatestRenderer,
} from "react-native-maps";
// import { MapView } from "expo";
import { PermissionsAndroid, StyleSheet, Text, View } from "react-native";
// import { createClient } from "@google/maps";

// const googleMaps = createClient({
//   key: "396667099624-3ac76265s9efop5r2m7qggsccm7h2tr1.apps.googleusercontent.com",
// });
PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
);
PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
);

const GgMap = () => {
  return (
    <View style={styles.container}>
      <Text>áda</Text>
      <View
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "red",
        }}
      >
        <MapView
          key={"AIzaSyAY-J35t5ijwI3ldeShek4_9ruoZYk4rXM"}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 500,
    height: 500,
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
});
export default GgMap;
