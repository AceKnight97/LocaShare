import { StyleSheet } from 'react-native';

const loginFrameStyle = StyleSheet.create({
  loginFrame: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  loginFrameHeader: {
    height: '20%',
    paddingTop: 48,
  },
  loginFrameHeaderMainTitle: {
    color: '#123456',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginFrameBody: {
    flex: 1,
  },
  loginFrameFooter: {
    height: '8%',
  },
  loginFrameFooterCopyright: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: 12,
    fontSize: 12,
    justifyContent: 'center',
  },
});

export default loginFrameStyle;
