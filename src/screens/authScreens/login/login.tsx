import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type LoginProps = {}; // Define your prop types here if needed

const Login: React.FC<LoginProps> = () => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink",
        flex:1,
    }
});
