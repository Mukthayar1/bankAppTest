import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../../../constants/colors';
import { ResponsiveFonts } from '../../../constants/appFonts';
import { StatusBarHeight, verticalScale } from '../../../constants/dynamicSizes';
import CustomButton from '../../../components/customButton/customButton';
import CustomInput from '../../../components/customInput/customInput';
import TextLabel from '../../../components/textLabel/textLabel';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {

    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();
    const [loading, setLoading] = useState<Boolean>();
    const [viewPassword, setViewPassword] = useState<Boolean>();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.loginBody}>
                    <TextLabel label={"Login"} ResponsiveFonts={ResponsiveFonts.textualStyles.H1}
                        marginTop={StatusBarHeight} marginBottom={10} fontSize={25} />

                    <CustomInput
                        placeholder={"Email address"}
                        value={email}
                        keybord={'email-address'}
                        setValue={setEmail}
                        width={'100%'}
                    />
                    <CustomInput
                        placeholder={"Login pin"}
                        secureTextEntry={viewPassword}
                        secure={true}
                        value={password}
                        setValue={setPassword}
                        width={'100%'}
                        marginTop={20}
                        SetsecureTextEntry={() => setViewPassword(prevState => !prevState)}
                    />

                    <View style={styles.row}>
                        <TextLabel label={"Forgot pin? "} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} color={Colors.black} />
                        <TouchableOpacity>
                            <TextLabel label={"reset"} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} color={Colors.theme} />
                        </TouchableOpacity>
                    </View>

                    <CustomButton
                        text={"Login"}
                        marginTop={20}
                        width='100%'
                        fgColor={Colors.white}
                        onPress={() => { }}
                    />

                    <View style={[styles.row, { alignSelf: "center" }]}>
                        <TextLabel label={"Don’t have an account? "} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} color={Colors.black} />
                        <TouchableOpacity>
                            <TextLabel label={"Sign up"} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} color={Colors.theme} />
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    loginBody: {
        width: "95%",
        alignSelf: "center",
    },
    row: {
        flexDirection: "row",
        marginTop: verticalScale(5)
    }
});
