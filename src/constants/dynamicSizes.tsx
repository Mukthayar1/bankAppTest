import { Dimensions, StatusBar, NativeModules, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const moderateScaleVertical = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;
const textScale = percent => {
    const screenHeight = Dimensions.get('window').height;
    const ratio = Dimensions.get('window').height / Dimensions.get('window').width;
    const deviceHeight = 375
        ? screenHeight * (ratio > 1.8 ? 0.126 : 0.15) 
        : Platform.OS === 'android'
            ? screenHeight - StatusBar?.currentHeight
            : screenHeight;

    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
};

const StatusBarHeight = Platform.select({
    ios: StatusBarManager.HEIGHT,
    android: StatusBar.currentHeight,
    default: 0
})

export { scale, verticalScale, textScale, moderateScale, moderateScaleVertical, width, height, StatusBarHeight };