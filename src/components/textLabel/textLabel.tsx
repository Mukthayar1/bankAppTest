import React from 'react';
import { ColorValue, Text, View } from 'react-native';

import Colors from '../../constants/colors';
import { moderateScale, textScale, verticalScale } from '../../constants/dynamicSizes';

const TextLabel: React.FC<Props> = ({
  label,
  color,
  marginTop,
  marginLeft,
  alignSelf,
  marginBottom,
  textAlign,
  fontWeight,
  marginRight,
  width,
  numOfLine,
  ResponsiveFonts,
  adjustsFontSizeToFit,
  fontSize,
  borderBottomWidth,
  borderStyle
}) => {
  return (
    <View
      style={[
        marginTop ? { marginTop: verticalScale(marginTop) } : { marginTop: 0 },
        alignSelf ? { alignSelf } : {},
        marginRight ? { marginRight } : {},
        width ? { width } : {},
        borderBottomWidth ? { borderBottomWidth } : {},
        borderStyle ? { borderStyle } : {},

      ]}>
      <Text
        numberOfLines={numOfLine}
        allowFontScaling={false}
        adjustsFontSizeToFit={adjustsFontSizeToFit == true ? true : false}
        style={[
          fontWeight ? { fontWeight } : {},
          ResponsiveFonts ? { ...ResponsiveFonts } : {},
          fontSize ? { fontSize: textScale(fontSize) } : {},
          color ? { color } : { color: Colors.black },
          marginLeft ? { marginLeft: moderateScale(marginLeft) } : {},
          marginBottom ? { marginBottom: verticalScale(marginBottom) } : {},
          textAlign ? { textAlign } : {},
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default TextLabel;

type Props = {
  label?: String | null,
  color?: ColorValue,
  marginTop?: number,
  marginLeft?: number | String,
  alignSelf?: string,
  marginBottom?: number,
  textAlign?: string,
  fontWeight?: string,
  marginRight?: Number | String,
  width?: string,
  numOfLine?: string,
  ResponsiveFonts?: object | any,
  adjustsFontSizeToFit?: boolean,
  fontSize?: Number,
  borderBottomWidth?: Number | String,
  borderStyle?: String,
};