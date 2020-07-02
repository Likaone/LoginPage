import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDr9k3bq_-R1wA_Ffqm1Jiwv0pXFTQCmLU",
    authDomain: "loginpage-40764.firebaseapp.com",
    databaseURL: "https://loginpage-40764.firebaseio.com",
    projectId: "loginpage-40764",
    storageBucket: "",
    messagingSenderId: "434204859040",
    appId: "1: 434204859040: web: d55bccc55b10772cab47c5"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default NavigationContainer(
    NavigationContainer(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
