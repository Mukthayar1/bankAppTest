import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';

type HistoryProps = {};

const History: React.FC<HistoryProps> = () => {
    return (
        <View style={styles.container}>
           <CustomHeader label={"History"} back={true} />
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey50
    }
});
