import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import AuthContext from '../../../auth';
import { useMergeState } from '../../../ultis/index';
import LoginFrameStyle from './loginFrameStyle';

const { loginFrame } = LoginFrameStyle;

const LoginFrame = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });

  useEffect(() => {}, []);

  const goToSignUp = () => {
    props.navigation.navigate('signUp');
  };

  return (
    <View style={loginFrame}>
      {/* HEADER */}
      <View
        style={{
          height: '20%',
          paddingTop: 48,
          // backgroundColor: 'gray',
        }}>
        <Text
          style={{
            color: '#123456',
            fontSize: 48,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          LocaShare
        </Text>
      </View>
      {/* BODY */}
      <View
        style={{
          // height: '60%',
          backgroundColor: 'red',
          flex: 1,
        }}>
        <Text
          style={{
            color: '#123456',
            fontSize: 48,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          LocaShare
        </Text>
      </View>
      {/* FOOTER */}
      <View
        style={{
          height: '16%',
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            color: '#123456',
            fontSize: 48,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          LocaShare
        </Text>
      </View>
    </View>
  );
};

LoginFrame.defaultProps = {};
LoginFrame.propTypes = {};

export default LoginFrame;
