
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../../components/CustomBottomTab/CustomBottomTab';
import { Home, History } from '../../screens/userScreens';

const UserRoute = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
            <Tab.Group
                screenOptions={{
                    headerShown: false,
                }}>
                <Tab.Screen
                    options={{ tabBarLabel: 'Home' }}
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    options={{ tabBarLabel: 'Home2' }}
                    name="Cart"
                    component={Home}
                />

                <Tab.Screen
                    options={{ tabBarLabel: 'History2' }}
                    name="History"
                    component={History}
                />
                <Tab.Screen
                    options={{ tabBarLabel: 'History' }}
                    name="History2"
                    component={History}
                />
            </Tab.Group>
        </Tab.Navigator>
    );
};
export default UserRoute;
