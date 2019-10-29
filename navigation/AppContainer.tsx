import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      home: HomeScreen,
      details: DetailsScreen
    },
    {
      initialRouteName: "home",
      tabBarOptions: {},
      tabBarPosition: "bottom",
      swipeEnabled: true
    }
  )
);
