import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';

import AuthRoutes from './authRoutes';
import UserRoute from './userRoute';



const MainRoutes: React.FC = () => {
    const userDetails = useSelector((state: object) => state?.userReducer?.userDetails);

    console.log('userDetails',userDetails);

    return (
        <NavigationContainer>
            {!userDetails ? <AuthRoutes /> : <UserRoute />}
        </NavigationContainer>
    );
};

export default MainRoutes;
