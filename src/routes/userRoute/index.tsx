import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import BottomTabs from './BottomBar';

type AuthStackParamList = {
    BottomTabs: undefined;
};

const UserRoute: React.FC = () => {

    const Stack = createNativeStackNavigator<AuthStackParamList>();

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        animation: 'slide_from_bottom',
        animationDuration: 500
    };

    return (
        <Stack.Navigator initialRouteName="BottomTabs" screenOptions={screenOptions}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    );
};

export default UserRoute;
