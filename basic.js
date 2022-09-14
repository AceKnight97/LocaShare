import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
// import AuthContext from '../../auth';

const SignIn = (props) => {
  // const { signIn } = useContext(AuthContext);
  const [state, setState] = useMergeState({
    data: [],
  });

  useEffect(() => {
  }, []);

  const goToSignUp = () => {
    props.navigation.navigate('signUp');
  };

  return (
    <View style={{}}>
      <Text>Text</Text>
    </View>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
