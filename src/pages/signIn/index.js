import PropTypes from "prop-types";
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../../auth";

const SignIn = (props) => {
  const { signIn } = useContext(AuthContext);
  return (
    <View style={{}}>
      <Text>Sign In</Text>
      <Button onPress={() => signIn({ A: "1" })} title="Sign In"></Button>
    </View>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
