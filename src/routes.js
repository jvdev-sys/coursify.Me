import * as React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import Post from './pages/Post';
import { Colors } from './services/constants';
import HeaderLogo from './assets/logo-2.png';
import Icon from '../src/services/loadFont'


const Stack = createNativeStackNavigator();


function LogoTitle() {
    return (
        <Image
            style={{ width: 170, height: 50, resizeMode:'contain' }}
            source={HeaderLogo}
        />
    );
}
const MenuButton = () => {
    return (
        <TouchableOpacity 
        onPress={()=>{}}
        >
            <Icon
                style={styles.icon}
                name='menu'
            />
        </TouchableOpacity>
    );
}

const AppScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName={'SplashScreen'}
        >
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={() => ({
                    headerShown: false
                })}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ route }) => ({
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: Colors.white,
                        justifyContent: 'space-between',
                    },
                    headerRight: (props) => (
                        <MenuButton
                            {...props}
                            onPress={() => {   }}
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="Post"
                component={Post}
                options={({ route }) => ({
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: Colors.white,
                        justifyContent: 'space-between',
                    },
                    headerRight: (props) => (
                        <MenuButton
                            {...props}
                            onPress={() => {}}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}


const Routes = () => {


    return (
        <NavigationContainer>
            < AppScreens />
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    icon: {
        color: Colors.white,
        fontSize: 28,
        fontWeight: '700',
        backgroundColor: Colors.lightSeaGreen,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 50,
    }
})

export default Routes;