import * as React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMaker = (props) => {
  const { latitude, longitude, text, backgroundColor } = props;
  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}>
      <View>
        {text && (
          <Text
            style={{
              fontSize: 14,
            }}>
            {text}
          </Text>
        )}
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: backgroundColor || 'blue',
            borderRadius: 20,
            borderWidth: 3,
            borderColor: 'white',
            position: 'relative',
          }}></View>
      </View>
    </Marker>
  );
}
export default CustomMaker; 