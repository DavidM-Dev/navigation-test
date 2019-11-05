import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import CameraScreen from "../screens/CameraScreen";
import ResultsScreen from "../screens/ResultsScreen";
import AboutScreen from '../screens/AboutScreen';

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      camera: CameraScreen,
      results: ResultsScreen,
      about: AboutScreen
    },
    {
      initialRouteName: "camera",
      tabBarOptions: {},
      tabBarPosition: "bottom",
      swipeEnabled: true
    }
  )
);
