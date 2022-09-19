import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef } from "react";
import { View } from "react-native";
import AuthContext from "../../auth";
import InputCT from "../../components/Inputs/InputCT/index";
import LoginFrame from "../../components/ui/loginFrame/index";
import emailIc from "../../images/login/email.svg";
import emailAct from "../../images/login/emailAct.svg";
import pswIc from "../../images/login/privacy.svg";
import pswActIc from "../../images/login/privacyAct.svg";
import { useMergeState } from "../../ultis/index";
import signInStyle from "./signInStyle";

// const emailIc = <Image source={require("../../images/login/email.svg")} />;
// const emailActIc = (
//   <Image source={require("../../images/login/emailAct.svg")} />
// );
// const pswIc = <Image source={require("../../images/login/privacy.svg")} />;
// const pswActIc = (
//   <Image source={require("../../images/login/privacyAct.svg")} />
// );

const { signInTitle, signInInputEmail } = signInStyle;

const SignIn = (props) => {
  const { signIn } = useContext(AuthContext);
  const nextInput1 = useRef(undefined);
  const [state, setState] = useMergeState({
    email: "",
    password: "",
    emailErr: "",
    passwordErr: "",

    loading: false,
  });

  useEffect(() => {}, []);

  const goToSignUp = () => {
    props.navigation.navigate("signUp");
  };

  const onChange = (key, value) => {
    setState({ [key]: value, emailErr: "", passwordErr: "" });
  };

  const { email, password, emailErr, passwordErr } = state;

  return (
    <LoginFrame>
      <View style={signInStyle.signIn}>
        <InputCT
          style={signInInputEmail}
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          icon={email ? emailAct : emailIc}
          onSubmitEditing={() => {
            nextInput1.current.focus();
          }}
          returnKeyType="next"
          keyboardType="email-address"
          errMes={emailErr}
        />

        <InputCT
          isSecured
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          style={{ marginTop: 48 }}
          icon={password ? pswActIc : pswIc}
          onRef={(input) => {
            nextInput1.current = input;
          }}
          returnKeyType="done"
          errMes={passwordErr}
        />

        {/* <TouchableOpacity>asdad</TouchableOpacity> */}
      </View>
    </LoginFrame>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  login: PropTypes.shape(),
};

export default SignIn;
