import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import loadFonts from "../assets/fonts/loader";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";
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
import Menu from "./screens/Menu";
import { Provider } from "react-redux";
import store from "./redux/index";
import BlockError from "./screens/BlockError";

/**
 * This is the router component for the application, This component
 * contains the stack for the navigation system and also loads important data in the application.
 */

const Router: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect((): void => {
    loadFonts()
      .then((): void => {
        setLoading(false);
      })
      .catch((err: string): void => {
        Alert.alert(
          "Error while loading fonts",
          "An error occurred while trying to load fonts, try restarting the application or submit a issue report on Chill&chat offical github. \nError code: CC_ERROR_0015"
        );
        console.error(
          "Error: Unable to load fonts. \n    at Router.tsx expoAppLoading.default \n    at loader.ts \n  Error code: CC_ERROR_0015"
        );
        console.error(`Expo error message: ${err}`);

        return;
      });
  }, []);

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
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <View style={style.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <NavigatorStack.Navigator initialRouteName="login">
              <NavigatorStack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
              />
              <NavigatorStack.Screen
                name="sign-up"
                component={Signup}
                options={{ headerShown: false }}
              />
              <NavigatorStack.Screen
                name="menu"
                component={Menu}
                options={{ headerShown: false }}
              />
              <NavigatorStack.Screen
                name="chat"
                component={Chat}
                options={{ headerShown: false }}
              />
              <NavigatorStack.Screen
                name="error"
                component={Error}
                options={{
                  headerTitle: "Unexpected Error",
                  headerStyle: {
                    backgroundColor: "orange",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <NavigatorStack.Screen
                name="block-error"
                component={BlockError}
                options={{
                  headerTitle: "Unexpected Error",
                  headerStyle: {
                    backgroundColor: "orange",
                  },
                  headerTintColor: "#fff",
                }}
              />
            </NavigatorStack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
};

export default Router;