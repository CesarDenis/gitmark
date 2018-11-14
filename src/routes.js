import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import { Main, Favorites } from 'pages';

const Routes = StackNavigator(
  {
    Main: { screen: Main },
    Favorites: { screen: Favorites },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryDark,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  }
);

export default Routes;
