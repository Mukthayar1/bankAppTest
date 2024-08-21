import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';
import { getMutualFunds } from '../../../api/userApi/userServices';
import FundItem from './fundItem';
import { ResponsiveFonts } from '../../../constants/appFonts';
import TextLabel from '../../../components/textLabel/textLabel';
import { moderateScale, verticalScale } from '../../../constants/dynamicSizes';
import CustomInput from '../../../components/customInput/customInput';
import { arrowDownIcon3, filterIcon, searchIcon } from '../../../constants/images';

type FundsProps = {};

const Funds: React.FC<FundsProps> = () => {

    const [searchValue, setSearchValue] = useState<String>("");

    const { data, isLoading } = useQuery({
        queryKey: ["ads"],
        queryFn: async () => await getMutualFunds()
    });

    return (
        <View style={styles.container}>
            <CustomHeader label={"Mutual Funds"} back={true} />


            <View style={styles.searchRow}>
                <CustomInput
                    type={'ICON'}
                    placeholder={"Search Funds"}
                    value={searchValue}
                    keybord={'email-address'}
                    setValue={setSearchValue}
                    icon={searchIcon}
                    height={55}
                    width={'65%'} />
                <TouchableOpacity style={styles.row}>
                    <Image source={filterIcon} resizeMode='contain' style={styles.icon} />
                    <Image source={arrowDownIcon3} resizeMode='contain' style={styles.icon} />
                </TouchableOpacity>
            </View>

            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <>
                            {data?.data &&
                                <TextLabel label={`Total Funds ${data?.data?.length}`} marginTop={20}
                                    ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts}
                                    fontSize={14} marginLeft={15} marginBottom={10} />}
                        </>
                    )
                }}
                data={data?.data}
                renderItem={({ item }) => <FundItem item={item} />}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={() => <View style={styles.handlingBottomTabHeight} />}
            />

        </View>
    );
};

export default Funds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    handlingBottomTabHeight: {
        height: verticalScale(80),
    },
    searchRow: {
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: verticalScale(20)
    },
    icon: {
        height: verticalScale(30),
        width: moderateScale(30)
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "25%",
        height: verticalScale(55),
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: Colors.grey50,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: Colors.grey300
    }
});
