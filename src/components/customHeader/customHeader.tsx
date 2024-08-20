import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { moderateScale, verticalScale } from '../../constants/dynamicSizes';
import TextLabel from '../textLabel/textLabel';
import { ResponsiveFonts } from '../../constants/appFonts';
import { arrowLeftIcon } from '../../constants/images';
import Colors from '../../constants/colors';

type CustomHeaderProps = {
    label: String;
    back: Boolean;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ label, back }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.headerContainer}>
            {back && <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={arrowLeftIcon} style={styles.arrowLeftIcon} resizeMode='contain' />
            </TouchableOpacity>}
            <TextLabel label={label} ResponsiveFonts={ResponsiveFonts.textualStyles.H1} fontSize={22} />
        </View>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: verticalScale(80),
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    arrowLeftIcon: {
        height: verticalScale(18),
        width: moderateScale(18),
        marginRight: moderateScale(8)
    }
});
