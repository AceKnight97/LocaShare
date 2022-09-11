import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { View, Text } from "react-native";

const User = (props) => {
  return (
    <View style={{}}>
      <Text>
        User In:
        <Text>{moment().format("x")}</Text>
      </Text>
    </View>
  );
};

User.defaultProps = {};
User.propTypes = {
  login: PropTypes.shape(),
};

export default User;
