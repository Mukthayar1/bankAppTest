import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';

type WithdrawProps = {};

const Withdraw: React.FC<WithdrawProps> = () => {
    return (
        <View style={styles.container}>
          <CustomHeader label={"Withdraw Funds"} back={true} />
        </View>
    );
};

export default Withdraw;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
});
