import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '700',
  },

  description: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: metrics.baseMargin / 2,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: 'stretch',
  },

  error: {
    color: colors.danger,
    alignSelf: 'center',
    fontWeight: '700',
    marginBottom: metrics.baseMargin,
  },

  loading: {
    color: colors.darkTransparent,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 48,
    paddingHorizontal: metrics.basePadding,
    fontSize: 16,
  },

  button: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    height: 48,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.darkTransparent,
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    paddingBottom: metrics.basePadding,
  },

  footerLink: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
