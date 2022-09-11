import PropTypes from "prop-types";
import React from "react";
import { View, Text } from "react-native";

const SignIn = (props) => {
  return (
    <View style={{}}>
      <Text>Sign In</Text>
    </View>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
