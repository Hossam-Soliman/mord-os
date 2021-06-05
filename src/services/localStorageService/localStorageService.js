var CryptoJS = require("crypto-js");

export const addToLocalStorage = (key, value) => {
  var encryptedValue = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    "secret"
  ).toString();
  localStorage.setItem(key, encryptedValue);
};

export const getFromLocalStorage = (key) => {
  const decryptedValue = localStorage.getItem(key);
  if (decryptedValue) {
    var bytes = CryptoJS.AES.decrypt(decryptedValue, "secret");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
  return "";
};
