import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
    return (
        <View style={styles.container}>
            <CustomHeader label={"Home"} back={false} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
});
