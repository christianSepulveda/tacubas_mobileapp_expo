import React, { JSX } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../UI/Screens/Login/index";
import Dashboard from "../UI/Screens/Dashboard";

export enum RouteNav {
  Login = "Login",
  Dashboard = "Dashboard",
}

type PublicRouteList = {
  Login: undefined;
  Dashboard: undefined;
};

const PublicStack = createStackNavigator<PublicRouteList>();

const AppNavigator = (): JSX.Element => (
  <PublicStack.Navigator screenOptions={{ headerShown: false }}>
    <PublicStack.Screen name={RouteNav.Login} component={Login} />
    <PublicStack.Screen name={RouteNav.Dashboard} component={Dashboard} />
  </PublicStack.Navigator>
);

export default AppNavigator;
