import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import AuthContext from "../../auth";
import LoginFrame from "../../components/ui/loginFrame/index"

const SignIn = (props) => {
  const { signIn } = useContext(AuthContext);
  const [state, setState] = useState();

  useEffect(() => {
  }, []);

  const goToSignUp = () => {
    props.navigation.navigate('signUp')
  }

  return (
    <LoginFrame>
      <Text>Sign In</Text>
      <Button onPress={() => { }} title="Sign In"></Button>
      <Button onPress={goToSignUp} title="Sign Up"></Button>

      
      {/*
      
      <TextInput
        style={{
          marginTop: 24,
          borderRadius: 4,
          borderColor: "#CDCED1",
          borderWidth: 1,
          height: 36,
          paddingHorizontal: 10,
          
          // backgroundColor: '#123456',
        }}
      />
      
      */}
    </LoginFrame>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
