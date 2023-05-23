import React, { useState, useEffect } from 'react';
import { StyleSheet} from 'react-native';
import R from "./src/res/R";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const App = () => {
    const [data, setData] = useState({
        password: null,
        categories: [
            {
                key: 1,
                name: "food",
                image: R.images.food,
            },
            {
                key: 2,
                name: "diner",
                image: R.images.dinner
            },
            {
                key: 3,
                name:"cloth",
                image :R.images.cloth,
            },
            {
                key :4,
                name :"home",
                image :R.images.home
            },
            {
                key :5,
                name :"leisure",
                image :R.images.leisure
            },
            {
                key :6,
                name :"petrol",
                image :R.images.petrol
            },
            {
                key :7,
                name :"service",
                image :R. images.service
            },
            {
                key :8,
                name :"sport",
                image :R. images.sport ,
            }
        ],
        transactions: [

        ]
    });
    // const [fetchData, isLoading, error] = useFetching( async () => {
    //     const data = await storageService.getData();
    //     setData(data);
    //     if (null){
    //         await initService.initData();
    //         fetchData();
    //     }
    // })
    //
    // useEffect(() => {
    //     fetchData();
    //     }, []
    // );
    // const isLoading = false;
    // const error = false
    // if (isLoading) {
    //     return <Text>Loading...</Text>;
    // }
    //
    // if (error) {
    //     return <Text>Error: {error.message}</Text>;
    // }

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}
                              options={{ headerShown: false }}
                              initialParams={{data: data}}
                />
                <Stack.Screen name="Details" component={DetailsScreen}
                              options={
                                  {
                                      title: 'Отчеты',
                                      headerStyle: {
                                          backgroundColor: R.colors.calcButton,
                                      },
                                      headerTintColor: R.colors.button,
                                      headerTitleStyle: {
                                          fontWeight: 'bold',
                                          fontSize: 24,
                                          color: R.colors.title,
                                      },
                                      headerTitleAlign: "center",
                                  }
                              }
                              initialParams={{data: data}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;

const styles =  StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: R.colors.background,
  }
});