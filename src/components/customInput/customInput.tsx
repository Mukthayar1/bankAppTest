import React, { FC, SetStateAction } from 'react'
import { View, Pressable, TextInput, StyleSheet, Image, ImageSourcePropType, ColorValue } from 'react-native';

import Colors from '../../constants/colors';
import { eyeCloseIcon, eyeOpenIcon } from '../../constants/images';
import { ResponsiveFonts } from '../../constants/appFonts';
import { verticalScale } from '../../constants/dynamicSizes';

const CustomInput: FC<Props> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keybord,
  multiline,
  numberOfLines,
  icon,
  type,
  SetsecureTextEntry,
  secure,
  tintColor,
  color,
  height,
  widthinput,
  editable,
  width
}) => {


  return (
    <View style={[styles.container,
    width ? { width } : {},
    height ? { height } : {},
    ]}>
      {type == 'ICON' && icon && (
        <Image
          source={icon}
          style={[
            styles.img,
            tintColor ? { tintColor } : { tintColor: Colors.grey500 },
          ]}
          resizeMode={'contain'}
        />
      )}
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={[
          styles.input,
          color ? { color } : { color: Colors.black },
          // height ? { height } : {}, { ...ResponsiveFonts.textualStyles.TextInputFonts },
          widthinput && { width: widthinput },
          icon ? { marginLeft: 10 } : {},
        ]}
        secureTextEntry={secureTextEntry}
        keyboardType={keybord ? keybord : 'default'}
        placeholderTextColor={Colors.grey500}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
      />
      {secure == true && (
        <Pressable onPress={() => SetsecureTextEntry(!secureTextEntry)}>
          <Image
            source={secureTextEntry != true ? eyeOpenIcon : eyeCloseIcon}
            style={[styles.img2]}
            resizeMode={'contain'}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(65),
    color: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: Colors.grey50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Colors.grey300

  },
  input: {
    width: '90%',
    color: '#000',

  },
  img: {
    height: 25,
    width: 25,
    tintColor: Colors.black,
    marginLeft: 5
  },
  img2: {
    height: 20,
    width: 20,
    marginLeft: -30,
    tintColor: Colors.grey500
  },
});


type Props = {
  value?: string | null;
  setValue?: SetStateAction<any>;
  placeholder?: string | null;
  secureTextEntry?: boolean;
  keybord?: string;
  multiline?: boolean;
  numberOfLines?: number;
  icon?: ImageSourcePropType;
  type?: string;
  SetsecureTextEntry?: SetStateAction<any>;
  secure?: boolean;
  width?: number | string;
  tintColor?: ColorValue;
  borderWidth?: number | string;
  borderColor?: ColorValue;
  color?: ColorValue;
  height?: number | string;
  Label?: string | null;
  widthinput?: number | string;
  editable?: boolean;
};

export default CustomInput;