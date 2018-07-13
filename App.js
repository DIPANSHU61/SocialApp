/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Schema, Actions, Scene, Route, ActionConst, Tabs} from 'react-native-router-flux';
import SplashScreen from "./src/container/splash/SplashScreen";
import AlreadyAccountScreen from "./src/container/signup/AlreadyAccountScreen";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="already_account" component={AlreadyAccountScreen} hideNavBar panHandlers={null}></Scene>
                    <Scene key="splash_screen" component={SplashScreen} hideNavBar panHandlers={null}></Scene>


                </Scene>


            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
