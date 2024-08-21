import React from 'react';
import { Alert, Animated, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';

import { arrowDownIcon, centerCircle, fundsIcon, homeIcon, syncIcon } from '../../constants/images';
import { verticalScale } from '../../constants/dynamicSizes';
import Colors from '../../constants/colors';
import TextLabel from '../../components/textLabel/textLabel';
import { History, Home, Funds, Withdraw } from '../../screens/userScreens';

const BottomTabs = () => {

    const _renderIcon = (routeName: string, selectedTab: String) => {
        const icon = routeName == "Home" ? homeIcon : routeName == "Funds" ? fundsIcon : routeName == "History" ? syncIcon : arrowDownIcon;
        return (
            <Image source={icon} style={routeName == selectedTab ? styles.bottomIconActive : styles.bottomIcon} resizeMode='contain' />
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }: RenderTabBarProps) => {
        return (
            <TouchableOpacity onPress={() => navigate(routeName)} style={styles.tabbarItem}>
                {_renderIcon(routeName, selectedTab)}
                <TextLabel label={routeName} color={routeName == selectedTab ? Colors.theme : Colors.grey500} fontSize={10} />
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBarExpo.Navigator
            type="DOWN"
            style={styles.bottomBar}
            screenOptions={{ headerShown: false }}
            shadowStyle={styles.shawdow}
            height={70}
            circleWidth={50}
            borderTopLeftRight={false}
            bgColor="white"
            initialRouteName="Home"
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircleUp}>
                    <TouchableOpacity onPress={() => Alert.alert('Pressed')}>
                        <Image source={centerCircle} resizeMode='cover' style={styles.centerIcon} />
                    </TouchableOpacity>
                </Animated.View>
            )}
            tabBar={renderTabBar}>
            <CurvedBottomBarExpo.Screen
                name="Home"
                position="LEFT"
                component={() => <Home />}
            />
            <CurvedBottomBarExpo.Screen
                name="Funds"
                position="LEFT"
                component={() => <Funds />}
            />
            <CurvedBottomBarExpo.Screen
                name="History"
                component={() => <History />}
                position="RIGHT"
            />
            <CurvedBottomBarExpo.Screen
                name="Withdraw"
                component={() => <Withdraw />}
                position="RIGHT"
            />
        </CurvedBottomBarExpo.Navigator>
    );
}

export default BottomTabs;

type RenderTabBarProps = {
    routeName: string;
    selectedTab: string;
    navigate: (routeName: string) => void;
};

const styles = StyleSheet.create({
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    bottomBar: {
    },
    btnCircleUp: {
        width: verticalScale(50),
        height: verticalScale(50),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        overflow: "hidden",
    },
    centerIcon: {
        width: verticalScale(150),
        height: verticalScale(150),
    },
    bottomIconActive: {
        width: verticalScale(25),
        height: verticalScale(25),
        tintColor: Colors.theme
    },
    bottomIcon: {
        width: verticalScale(25),
        height: verticalScale(25),
        tintColor: Colors.grey500
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

