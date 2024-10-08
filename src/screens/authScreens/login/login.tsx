import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../../../constants/colors';
import { ResponsiveFonts } from '../../../constants/appFonts';
import { StatusBarHeight, verticalScale } from '../../../constants/dynamicSizes';
import CustomButton from '../../../components/customButton/customButton';
import CustomInput from '../../../components/customInput/customInput';
import TextLabel from '../../../components/textLabel/textLabel';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginApi } from '../../../api/authApi/authServices';
import { encryptVal } from '../../../constants/encryption';
import { loginUser } from '../../../store/Reducer/userReducer';
import apiInstance from '../../../api/apiInstance';

const Login: React.FC = () => {

    const queryClient = useQueryClient();
    const dispatch = useDispatch()

    const [email, setEmail] = useState<String>("demo@harvestapp.com");
    const [password, setPassword] = useState<String>("HarvestTest#456");
    const [viewPassword, setViewPassword] = useState<Boolean>(true);
    const [error, setError] = useState<String>("")

    const { mutateAsync: loginMutation, isError, isPending } = useMutation({
        mutationFn: async (body: {}) => await loginApi(body),
        onSuccess: (data) => {
            console.log('data', data.data);
            if (data?.status == 201 && data.data?.userId) {
                const decryptData = encryptVal(JSON.stringify(data?.data));
                dispatch(loginUser(decryptData))
                queryClient.invalidateQueries({ queryKey: ["loginMutation"] });
            } else {
                setError(data.data || "Invalid Credentials")
            }

        },
    })

    const handleCreateAd = async (email: String, password: String) => {
        const body = {
            "email": email,
            "password": password
        }
        setError('')
        await loginMutation(body);
    }

    const isHaveValue = email?.trim()?.length > 0 && password?.trim()?.length > 0

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
                        editable={!isPending}
                        width={'100%'} />
                    <CustomInput
                        placeholder={"Login pin"}
                        secureTextEntry={viewPassword}
                        secure={true}
                        editable={!isPending}
                        value={password}
                        setValue={setPassword}
                        width={'100%'}
                        SetsecureTextEntry={() => setViewPassword(prevState => !prevState)} />


                    {(error || isError) && <TextLabel label={error || "Something went wrong try again"} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts}
                        color={Colors.red} textAlign='center' marginTop={10} />}

                    <View style={styles.row}>
                        <TextLabel label={"Forgot pin? "} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} color={Colors.black} />
                        <TouchableOpacity>
                            <TextLabel label={"reset"} ResponsiveFonts={ResponsiveFonts.textualStyles.TextInputFonts} color={Colors.theme} />
                        </TouchableOpacity>
                    </View>

                    <CustomButton
                        text={isPending ? "Loading" : "Login"}
                        marginTop={20}
                        disabled={isPending || !isHaveValue}
                        width='100%'
                        fgColor={Colors.white}
                        bgColor={!isPending && isHaveValue ? Colors.theme : Colors.grey300}
                        onPress={() => handleCreateAd(email, password)}
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
        width: "92%",
        alignSelf: "center",
    },
    row: {
        flexDirection: "row",
        marginTop: verticalScale(5)
    }
});
