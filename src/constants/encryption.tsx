import CryptoJS from 'react-native-crypto-js';
const EncryptionKey = "4567F00BANKI1234TESTAPP"

var key = CryptoJS.enc.Utf8.parse(EncryptionKey);
var iv = CryptoJS.enc.Utf8.parse(EncryptionKey);

const encryptVal = (encryptedValue: String) => CryptoJS.AES.encrypt(encryptedValue, 'secret key 123').toString();


const decryptVale = (encryptedValue: String) => {
    let bytes = CryptoJS.AES.decrypt(encryptedValue, 'secret key 123');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;

};

export {
    decryptVale,
    encryptVal,
}