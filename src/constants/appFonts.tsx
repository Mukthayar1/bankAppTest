import { Dimensions, Platform, PixelRatio, StyleSheet } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const os_android = Platform.OS == 'android';

const scale = SCREEN_WIDTH / 320;
const RegularFontFamily = os_android ? 'Public Sans' : "Public-Sans";
const MediumFont = os_android ? "Public Sans Medium" : "Public-Sans-Medium";


export class ResponsiveFonts {
    static normalize(size: number) {
        const newSize = size * scale;
        if (Platform.OS === "ios") {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
    }

    static textualStyles = StyleSheet.create({
        TextInputFonts: {
            fontSize: ResponsiveFonts.normalize(13),
            fontFamily: RegularFontFamily,
        },
        H1: {
            fontSize: ResponsiveFonts.normalize(18),
            fontFamily: MediumFont,
        },
    });
}
