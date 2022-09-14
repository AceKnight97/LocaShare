import * as Facebook from 'expo-facebook';
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

  const logInFb = async () => {
    console.log('FFFFF')
    try {
      // await Facebook.initializeAsync('1137015330530959', 'Ace');
      // (appId, appName)
      await Facebook.initializeAsync({
        appId: '1137015330530959',
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

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

  const goToSignUp = () => {
    props.navigation.navigate('signUp')
  }

  return (
    <View style={{}}>
      <Text>Sign In</Text>
      <Button onPress={() => { }} title="Sign In"></Button>
      <Button onPress={goToSignUp} title="Sign Up"></Button>
    </View>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
