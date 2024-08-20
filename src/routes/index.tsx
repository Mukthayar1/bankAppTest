import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';

import AuthRoutes from './authRoutes';
import UserRoute from './userRoute';

interface RootState {
    userReducer: {
        userDetails: {
            email: string | null;
        };
    };
}

const MainRoutes: React.FC = () => {
    const userLogin = useSelector((state: RootState) => state.userReducer.userDetails?.email);

    return (
        <NavigationContainer>
            {userLogin ? <AuthRoutes /> : <UserRoute />}
        </NavigationContainer>
    );
};

export default MainRoutes;
