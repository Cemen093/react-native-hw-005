import {StyleSheet, Text, View} from "react-native";
import CustomButton from "./CustomButton";
import { useState } from "react";
import R from "../res/R";


const Calculator = ({value, setValue, isIncome}) => {
    const buttons = [
        {key: "1", title: "1"},
        {key: "2", title: "2"},
        {key: "3", title: "3"},
        {key: "4", title: "4"},
        {key: "5", title: "5"},
        {key: "6", title: "6"},
        {key: "7", title: "7"},
        {key: "8", title: "8"},
        {key: "9", title: "9"},
        {key: "dot", title: "."},
        {key: "0", title: "0"},
        {key: "del", title: "<"},
    ];
    const handleNumberPress = (number) => {
        if (number === "del"){
            setValue(prevValue => prevValue.slice(0, -1));
            return;
        }
        if (number === 'dot') {
            if (!value.includes('.')){
                setValue(prevValue => prevValue + '.');
            }
            return;
        }
        setValue(prevValue => prevValue + number);
    };

    const createButton = (button) => {
        return (
            <View style={styles.button} key={button.key}>
                <CustomButton title={button.title} onPress={() => {handleNumberPress(button.key)}}/>
            </View>
        )
    }

    return (
        <View style={styles.containerCalculator}>
            <View style={styles.containerOutput}>
                {value === null || value === '' ?
                    <Text style={styles.text}>Введите {isIncome ? "доход" : "расход"}</Text>
                    :
                    <Text style={styles.text}>{value}</Text>
                }
            </View>


            <View style={styles.containerKeyboard}>
                {buttons.map((item) => (
                    createButton(item)
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCalculator: {
        flex: 1,
        padding: 25,
        flexDirection: "column",
    },
    containerOutput: {
        alignItems: "center",
        padding: 5,
    },
    text: {
        color: R.colors.title,
        fontSize: 25,
    },
    containerKeyboard: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    button: {
        width: "30%",
        margin: 3,
        marginTop: 5,
        justifyContent: "center",
    },
});

export default Calculator;