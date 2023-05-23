import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'react-native-hw-005';

const saveData = async (data) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.log('Error saving data', error);
    }
};

const getData = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.log('Error getting data', error);
    }
};

const removeData = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.log('Error removing data', error);
    }
};

const isStorageAvailable = async () => {
    try {
        await AsyncStorage.setItem('testKey', 'testValue');
        await AsyncStorage.removeItem('testKey');
        return true;
    } catch (error) {
        console.log('AsyncStorage is not available', error);
        return false;
    }
};

export default {
    saveData,
    getData,
    removeData,
    isStorageAvailable,
};
