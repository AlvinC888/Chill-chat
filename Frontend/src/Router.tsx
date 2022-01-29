import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import loadFonts from "../assets/fonts/loader";
import * as expoAppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import {
  NavigationContainer,
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from "@react-navigation/native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Chat from "./screens/Chat";
import Error from "./screens/Error";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";
import Menu from "./screens/Menu";

const Router: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  const NavigatorStack: TypedNavigator<
    ParamListBase,
    StackNavigationState<ParamListBase>,
    StackNavigationOptions,
    StackNavigationEventMap,
    ({
      initialRouteName,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: any) => JSX.Element
  > = createStackNavigator();

  const style: any = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  if (loading) {
    return (
      <expoAppLoading.default
        startAsync={async (): Promise<void> => {
          await loadFonts();
        }}
        onFinish={(): void => {
          setLoading(false);
        }}
        onError={(): void => {
          Alert.alert(
            "Error while loading fonts",
            "An error occurred while trying to load fonts, try restarting the application or submit a issue report on Chill&chat offical github. \nError code: CC_ERROR_0015"
          );
          console.error(
            "Error: Unable to load fonts. \nat Router.tsx expoAppLoading.default \nat loader.ts \nerror code: CC_ERROR_0015"
          );
        }}
      />
    );
  } else {
    return (
      <View style={style.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <NavigatorStack.Navigator initialRouteName="login">
            <NavigatorStack.Screen name="login" component={Login} />
            <NavigatorStack.Screen name="sign-up" component={Signup} />
            <NavigatorStack.Screen name="error" component={Error} />
            <NavigatorStack.Screen name="chat" component={Chat} />
            <NavigatorStack.Screen name="menu" component={Menu} />
          </NavigatorStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
};

export default Router;