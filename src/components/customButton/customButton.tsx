import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, ColorValue } from 'react-native';
import Colors from '../../constants/colors';
// import { ResponsiveFonts } from '../../constants/AppFonts';
import { verticalScale } from '../../constants/dynamicSizes';
import { ResponsiveFonts } from '../../constants/appFonts';

const CustomButton: React.FC<Props> = ({ onPress, text, bgColor, fgColor, width, marginTop, Icon, marginLeft, borderRadius, height, marginBottom, disabled, ResponsiveFont, borderWidth, fontSize }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled == true ? true : false}
      style={[
        styles.container,
        borderRadius ? { borderRadius } : { borderRadius: 10 },
        bgColor ? { backgroundColor: bgColor } : { backgroundColor: Colors.theme },
        width ? { width, } : {},
        marginTop ? { marginTop } : {},
        Icon ? { flexDirection: 'row', justifyContent: 'space-between' } : {},
        marginLeft ? { marginLeft } : {},
        height ? { height } : { height: verticalScale(60) },
        marginBottom ? { marginBottom } : {},
        borderWidth ? { borderWidth } : {}
      ]}>
      {Icon ?
        <Image source={Icon} style={{ height: 30, width: 30, tintColor: '#fff' }} resizeMode={'contain'} />
        : null}
      <Text
        style={[
          styles.text,
          fgColor ? { color: fgColor } : {},
          ResponsiveFont ? { ...ResponsiveFont } : { ...ResponsiveFonts.textualStyles.H1 },
          fontSize ? { fontSize: fontSize } : {}
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    alignSelf: 'center',

  },
  text: {
    color: Colors.black,
  },
});

type Props = {
  code?: string;
  onPress: () => void,
  text?: string | null,
  bgColor?: ColorValue,
  fgColor?: ColorValue,
  width?: string,
  marginTop?: number,
  Icon?: string | object,
  marginLeft?: number,
  borderRadius?: number,
  height?: number,
  marginBottom?: number,
  disabled?: boolean,
  ResponsiveFont?: object;
  borderWidth?: Number,
  fontSize?: Number
};

export default CustomButton;