import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';
import { getMutualFunds } from '../../../api/userApi/userServices';
import FundItem from './fundItem';

type FundsProps = {};

const Funds: React.FC<FundsProps> = () => {

    const queryClient = useQueryClient();
    const dispatch = useDispatch();


    const { data, isLoading } = useQuery({
        queryKey: ["ads"],
        queryFn: async () => await getMutualFunds()
    })

    return (
        <View style={styles.container}>
            <CustomHeader label={"Mutual Funds"} back={true} />
            <FlatList
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
