import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';

type FundsProps = {}; // Define your prop types here if needed

const Funds: React.FC<FundsProps> = () => {
    return (
        <View style={styles.container}>
            <CustomHeader label={"Funds"} back={true} />
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
