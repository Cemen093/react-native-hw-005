import AsyncStorage from '@react-native-async-storage/async-storage';
import R from "../res/R";

const STORAGE_KEY = 'react-native-hw-005';

const initData = async () => {
    const initData = {
        password: null,
        categories: {
            food: {
                id: 1,
                name: "food",
                image: R.images.food,
            },
            dinner: {
                id: 2,
                name: "diner",
                images: R.images.dinner
            },
            cloth: {
                id: 3,
                name: "cloth",
                image: R.images.cloth,
            },
            home: {
                id: 4,
                name: "home",
                image: R.images.home,
            },
            leisure:{
                id: 5,
                name:"leisure",
                image :R.images.leisure
            },
            petrol:{
                id :6,
                name :"petrol",
                image :R.images.petrol
            },
            service:{
                id :7,
                name :"service",
                image :R.images.service
            },
            sport:{
                id :8,
                name :"sport",
                image :R.images.sport,
            }
        },
        transactions: {

        }
    }

    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
    } catch (error) {
        console.log('Error saving data', error);
    }
};

export default {
    initData,
};
