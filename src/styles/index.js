import { StyleSheet } from 'react-native';
import flexBox from './base/flexBox';
import reuseStyle from './base/reuse';
import shadowStyle from './base/shadow';
import spacingStyle from './base/spacing';

const globalStyles = StyleSheet.create({
    ...flexBox,
    ...spacingStyle,
    ...shadowStyle,
    ...reuseStyle,
});

export default globalStyles;
