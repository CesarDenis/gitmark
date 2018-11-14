import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 54,
    height: 54,
  },

  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: 15,
  },

  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 14,
  },
});

export default styles;
