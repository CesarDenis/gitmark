import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 24,
  baseMargin: 16,
  baseRadius: 4,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
