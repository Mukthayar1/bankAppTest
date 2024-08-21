import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '../../../constants/colors';
import { moderateScale, verticalScale } from '../../../constants/dynamicSizes';
import { ResponsiveFonts } from '../../../constants/appFonts';
import TextLabel from '../../../components/textLabel/textLabel';
import { arrowDownIcon, arrowUpIcon } from '../../../constants/images';

const FundItem: React.FC<FundItemProps> = ({ item }) => {

    return (
        <View style={styles.card}>
            <View style={styles.header}>

                <View style={styles.headerRow}>
                    <Image source={require('../../../assets/dummyImages/bankImage.png')} resizeMode='contain' style={styles.bankImage} />
                    <TextLabel label={item?.name} ResponsiveFonts={ResponsiveFonts.textualStyles.H1}
                        fontWeight='bold' fontSize={16} width='70%' marginLeft={5} />
                </View>

                <View style={styles.annualReturnRow}>
                    <TextLabel label={"Annual Return"} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts}
                        fontSize={12} textAlign='center' alignSelf='center' />

                    <View style={item.last_year_return > 0 ? styles.returnContainer : styles.returnContainerNegative}>
                        {item.last_year_return > 0 && <Image source={arrowUpIcon} resizeMode='contain' style={styles.arrowUpIcon} />}
                        <TextLabel label={`+ ${item.last_year_return || 0} %`}
                            ResponsiveFonts={ResponsiveFonts.textualStyles.H1}
                            fontSize={12} color={item.last_year_return > 0 ? Colors.green700 : Colors.red} />
                        {(item.last_year_return < 1 || item.last_year_return == null) &&
                            <Image source={arrowDownIcon} resizeMode='contain' style={styles.arrowDownIcon} />}
                    </View>

                </View>
            </View>

            <TouchableOpacity style={styles.detailsButton} onPress={() => console.log('itenn', item)}>
                <TextLabel label={"View Details"} ResponsiveFonts={ResponsiveFonts.textualStyles.H1}
                    fontSize={16} textAlign='center' alignSelf='center' />
            </TouchableOpacity>

        </View>
    );
};

export default FundItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        padding: 16,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        width: "95%",
        alignSelf: "center"
    },
    annualReturnRow: {
        justifyContent: "center",
        alignItems: "center"
    },
    bankImage: {
        height: verticalScale(30),
        width: moderateScale(30)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    returnContainer: {
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Colors.green25,
        width: moderateScale(74),
        borderWidth: 1,
        borderColor: Colors.grey300,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    returnContainerNegative: {
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Colors.red100,
        width: moderateScale(74),
        borderWidth: 1,
        borderColor: Colors.grey300,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    returnText: {
        fontSize: 14,
        fontWeight: '600',
    },
    detailsButton: {
        marginTop: 16,
        backgroundColor: Colors.grey50,
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.grey300
    },
    arrowDownIcon: {
        height: verticalScale(15),
        width: moderateScale(15),
        tintColor: Colors.red
    },
    arrowUpIcon: {
        height: verticalScale(10),
        width: moderateScale(10)
    }
});

type FundItemProps = {
    item: {
        id: string;
        name: string;
        last_year_return: number;
    };
};

