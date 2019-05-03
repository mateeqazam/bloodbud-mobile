import { StyleSheet, AsyncStorage } from 'react-native';

export const _storeData = async (key, data) => {
  try {
    data = JSON.stringify(data);
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.log('Error saving data: ', e);
  }
};

export const _retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.log('Error retrieving data: ', e);
    return false;
  }
};
