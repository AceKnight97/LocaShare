import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../auth";

const SignUp = (props) => {
  const { signUp } = useContext(AuthContext);
  const [state, setState] = useState();


  return (
    <View style={{}}>
      <Text>Sign In</Text>
      <Button onPress={() => { }} title="Sign Up"></Button>
    </View>
  );
};

SignUp.defaultProps = {};
SignUp.propTypes = {
  login: PropTypes.shape(),
};

export default SignUp;
