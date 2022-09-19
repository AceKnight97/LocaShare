import PropTypes from "prop-types";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { colors } from "../../../constants/color";
import grayEye from "../../../images/basic/grayEye.svg";
import grayEyeCross from "../../../images/basic/grayEyeCross.svg";
import globalStyles from "../../../styles";
import { useMergeState } from "../../../ultis/index";
import InputTitle from "../InputTitle";
import InputCTStyle from "./_inputCT";

const { centerC, mr8, ml8 } = globalStyles;
const {
  inputWrapper,
  inputCTMain,
  textAreaStyle,
  inputBasic,
  activeBorder,
  errorStyle,
  errorBorder,
  placeholderStyle,
} = InputCTStyle;

const INPUT_CT_TYPES = {
  TEXT: "TEXT",
  TEXT_AREA: "TEXT_AREA",
  NUMBER: "NUMBER",
};

const { TEXT, TEXT_AREA, NUMBER } = INPUT_CT_TYPES;

const InputCT = (props) => {
  const [state, setState] = useMergeState({
    isFocus: false,
    isSecured: props.isSecured,
  });
  // const fetchBusinesses = useCallback(() => {
  //   setState({ isSecured: props.isSecured });
  // }, []);

  // useEffect(() => {
  //   fetchBusinesses();
  // }, [fetchBusinesses]);

  const {
    title,
    disabled,
    autoFocus,
    returnKeyType,
    // keyboardType,
    style,
    value,
    // multiline,
    // onChange,
    maxLength,
    placeholder,
    icon,
    onSubmitEditing,
    type,
    inputStyle,
    name,
    errMes,
    onRef,
  } = props;

  const { isFocus, isSecured } = state;

  const onChange = (text) => {
    props.onChange(name, text);
  };

  const onChangeSecure = () => {
    setState({ isSecured: !isSecured });
  };

  const onFocus = () => {
    setState({ isFocus: true });
  };

  const onBlur = () => {
    setState({ isFocus: false });
  };

  let typeStyle;
  let keyboardType = props.keyboardType;
  let multiline = props.multiline;
  let numberOfLines = props.numberOfLines;
  switch (type) {
    case TEXT_AREA:
      typeStyle = textAreaStyle;
      multiline = true;
      numberOfLines = props.numberOfLines || 6;
      break;
    case NUMBER:
      keyboardType = "numeric";
      break;
    default:
      break;
  }

  return (
    <View style={[inputCTMain, style]}>
      <InputTitle title={title} />

      <View
        style={[
          inputWrapper,
          typeStyle,
          isFocus ? activeBorder : {},
          errMes ? errorBorder : {},
        ]}
      >
        {icon ? <SvgXml xml={icon} style={{ marginRight: 8 }} /> : null}

        <TextInput
          ref={onRef}
          editable={!disabled}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType} // done or next
          // secureTextEntry={isSecured}
          onChangeText={onChange}
          maxLength={maxLength}
          value={`${value}`}
          style={[inputBasic, inputStyle]}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          numberOfLines={numberOfLines}
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={multiline}
          keyboardType={keyboardType}
          // fontStyle={fontStyle}
          // placeholderStyle={[{}, placeholderStyle]}
          placeholderTextColor={colors.gray3}
        />
        {props.isSecured ? (
          <TouchableOpacity style={ml8} onPress={onChangeSecure}>
            <SvgXml xml={isSecured ? grayEyeCross : grayEye} />
          </TouchableOpacity>
        ) : null}
      </View>

      {errMes ? <Text style={errorStyle}>{errMes}</Text> : null}
    </View>
  );
};

InputCT.defaultProps = {
  title: "",
  disabled: false,
  autoFocus: false,
  returnKeyType: "done",
  keyboardType: "default",
  style: {},
  value: "",
  isSecured: false,
  multiline: false,
  onChange: () => {},
  maxLength: 100,
  placeholder: "",
  icon: "",
  onSubmitEditing: () => {},
  numberOfLines: undefined,
  type: TEXT,
  inputStyle: {},
  name: "",
  errMes: "",
  onRef: undefined,
};
InputCT.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.shape(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSecured: PropTypes.bool,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  onSubmitEditing: PropTypes.func,
  numberOfLines: PropTypes.number,
  type: PropTypes.string,
  inputStyle: PropTypes.shape(),
  name: PropTypes.string,
  errMes: PropTypes.string,
  onRef: PropTypes.func,
};

export default InputCT;
