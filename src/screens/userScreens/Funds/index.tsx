import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';
import { getMutualFunds } from '../../../api/userApi/userServices';
import FundItem from './fundItem';
import { ResponsiveFonts } from '../../../constants/appFonts';
import TextLabel from '../../../components/textLabel/textLabel';

type FundsProps = {};

const Funds: React.FC<FundsProps> = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["ads"],
        queryFn: async () => await getMutualFunds()
    });

    return (
        <View style={styles.container}>
            <CustomHeader label={"Mutual Funds"} back={true} />


            <FlatList
                ListHeaderComponent={() => {
                    return (<>
                        {data?.data && <TextLabel label={`Total Funds ${data?.data?.length}`} marginTop={20}
                            ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} fontSize={14} marginLeft={15} marginBottom={10} />}</>)
                }}
                data={data?.data}
                renderItem={FundItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default Funds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
});
