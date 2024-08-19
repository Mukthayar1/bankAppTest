import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Login, ForgotPassword } from '../../screens/authScreens';

type AuthStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
};

const AuthRoutes: React.FC = () => {

    const Stack = createNativeStackNavigator<AuthStackParamList>();

    const screenOptions: NativeStackNavigationOptions = { 
        headerShown: false, 
        animation: 'slide_from_bottom', 
        animationDuration: 500 
    };

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
};

export default AuthRoutes;
