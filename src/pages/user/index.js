import moment from "moment";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../../auth";

const User = (props) => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={{}}>
      <Text>
        User In:
        <Text>{moment().format("x")}</Text>
      </Text>
      <Button onPress={() => signOut({ A: "1" })} title="Sign OUUUU"></Button>
    </View>
  );
};

User.defaultProps = {};
User.propTypes = {
  login: PropTypes.shape(),
};

export default User;
