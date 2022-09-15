import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import AuthContext from '../../auth';
import LoginFrame from '../../components/ui/loginFrame/index';
import InputCT from '../../components/Inputs/InputCT/index';
import emailIc from '../../images/Login/email.svg';
import emailActIc from '../../images/Login/emailAct.svg';
import { useMergeState } from '../../ultis/index';

const SignIn = (props) => {
  const { signIn } = useContext(AuthContext);
  const nextInput1 = useRef(undefined);
  const [state, setState] = useMergeState({
    email: '',
    password: '',
    emailErr: '',
    passwordErr: '',

    loading: false,
  });

  useEffect(() => {}, []);

  const goToSignUp = () => {
    props.navigation.navigate('signUp');
  };

  const onChange = () => {};

  const { email } = state;

  return (
    <LoginFrame>
      <Text>Sign In</Text>
      <Button onPress={() => {}} title="Sign In"></Button>
      <Button onPress={goToSignUp} title="Sign Up"></Button>

      <InputCT
        title="Email"
        name="email"
        value={'email'}
        onChange={onChange}
        placeholder="Email"
        icon={email ? emailActIc : emailIc}
        // onSubmitEditing={() => {
        //   nextInput1.current.focus();
        // }}
        returnKeyType="next"
        keyboardType="email-address"
        errMes={emailErr}
      />
    </LoginFrame>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
