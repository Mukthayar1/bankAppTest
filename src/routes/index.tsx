import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';

import AuthRoutes from './authRoutes';
import UserRoute from './userRoute';
import { RootState } from '../store/Reducer';

const MainRoutes: React.FC = () => {

    const userDetails = useSelector((state: RootState) => state?.userReducer?.userDetails);

    return (
        <NavigationContainer>
            {!userDetails ? <AuthRoutes /> : <UserRoute />}
        </NavigationContainer>
    );
};

export default MainRoutes;
