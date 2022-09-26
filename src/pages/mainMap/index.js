import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import CustomMaker from '../../components/ui/customMarker/index';

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const MainMap = () => {
  const [pin, setPin] = React.useState({
    latitude: 10.801802,
    longitude: 106.639823,
  });
  const [region, setRegion] = React.useState({
    latitude: 10.801802,
    longitude: 106.639823,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search..."
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: 'KEY',
          language: 'en',
          components: 'country:us',
          types: 'establishment',
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: 'absolute',
            zIndex: 1,
            top: 20,
            left: '5%',
            width: '90%',
          },
          listView: { backgroundColor: 'white' },
        }}
      />
      <MapView
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        showsMyLocationButton={true}
        provider="google">
        <CustomMaker
          latitude={region.latitude}
          longitude={region.longitude}
        />
        <CustomMaker
          latitude={region.latitude + 0.008}
          longitude={region.longitude + 0.006}
          text={'Ace'}
          backgroundColor={'red'}
        />
        <CustomMaker
          latitude={region.latitude + 0.004}
          longitude={region.longitude + 0.02}
          text={'Knight'}
          backgroundColor={'green'}
        />
      </MapView>
    </View>
  );
}

export default MainMap;

