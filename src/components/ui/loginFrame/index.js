import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import LoginFrameStyle from './loginFrameStyle';

const {
  loginFrame,
  loginFrameHeader,
  loginFrameBody,
  loginFrameFooter,
  loginFrameHeaderMainTitle,
  loginFrameFooterCopyright,
} = LoginFrameStyle;

const LoginFrame = (props) => {
  return (
    <View style={loginFrame}>
      {/* HEADER */}
      <View style={loginFrameHeader}>
        <Text style={loginFrameHeaderMainTitle}>LocaShare</Text>
      </View>
      {/* BODY */}
      <View style={loginFrameBody}>{props.children}</View>
      {/* FOOTER */}
      <View style={loginFrameFooter}>
        <Text style={loginFrameFooterCopyright}>@Copyright 2022</Text>
      </View>
    </View>
  );
};

LoginFrame.defaultProps = {};
LoginFrame.propTypes = {};

export default LoginFrame;
