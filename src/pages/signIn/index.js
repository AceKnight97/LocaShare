import * as Google from "expo-google-app-auth";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../auth";

const YOUR_CLIENT_ID_HERE =
  "396667099624-3ac76265s9efop5r2m7qggsccm7h2tr1.apps.googleusercontent.com";

const SignIn = (props) => {
  const { signIn } = useContext(AuthContext);
  const [state, setState] = useState();

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        clientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
      });
      console.log({ result });
      setState(result);
      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log({ e });
      return { error: true };
    }
  };

  useEffect(() => {
    // signInWithGoogleAsync();
  }, []);

  return (
    <View style={{}}>
      <Text>Sign In</Text>
      <Button onPress={() => signInWithGoogleAsync()} title="Sign In"></Button>
    </View>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
