import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import PopupMenu from "../components/PopupMenu";
import Calculator from "../components/Calculator";
import CategoryBlock from "../components/CategoryBlock";
import DailyAccountChange from "../components/DailyAccountChange";
import AbsolutePositionWrapper from "../components/AbsolutePositionWrapper";
import IconButton from "../components/IconButton";
import R from "../res/R";
import {StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";


const HomeScreen = ({ route }) => {
    const navigation = useNavigation();
    const {data} = route.params
    const [currTransactionValue, setCurrTransactionValue] = useState('');
    const [isIncome, setIsIncome] = useState(true);

    function getFloatFromString(str) {
        let floatStr = str.replace(/^\./, '0.');
        floatStr = floatStr.replace(/\.$/, '');
        const floatVal = parseFloat(floatStr);
        return isNaN(floatVal) ? 0 : parseFloat(floatVal.toFixed(2));
    }

    const addTransaction = (id) => {
        if (!id || !currTransactionValue){
            return
        }
        const newKey = Math.random().toString(36).substring(2, 10);
        const newValue = getFloatFromString(currTransactionValue);
        console.log(newKey)
        console.log(newValue)
        data.transactions.push(
            {
                key: newKey,
                categoryID: id,
                value: newValue,
                isIncome: isIncome,
                date: new Date(),
            }
        )
        setCurrTransactionValue("");
        setDailyChangeBalance(getDailyChangeBalance);
        console.log(data.transactions)
    }

    const getDailyChangeBalance = () => {
        const today = new Date().toLocaleDateString();
        let total = 0;

        data.transactions.forEach((transaction) => {
            const transactionDate = transaction.date.toLocaleDateString();

            if (transactionDate === today && transaction.isIncome) {
                total += transaction.value;
            } else {
                total -= transaction.value;
            }
        });

        return total;
    };
    const [dailyChangeBalance, setDailyChangeBalance] = useState(getDailyChangeBalance());


    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <PopupMenu isMenuVisible={isMenuVisible} onClose={() => {setIsMenuVisible(false)}}/>

            <Calculator value={currTransactionValue} setValue={setCurrTransactionValue} isIncome={isIncome}/>

            <CategoryBlock categories={data.categories} addTransaction={addTransaction}/>

            <DailyAccountChange value={dailyChangeBalance} isIncome={dailyChangeBalance >= 0} />

            <AbsolutePositionWrapper top={48} left={15}>
                <IconButton iconName={"menu"} color={R.colors.button} size={35} onPress={() => setIsMenuVisible(true)} />
            </AbsolutePositionWrapper>

            <AbsolutePositionWrapper top={48} right={15}>
                <IconButton iconName={"pie-chart"} color={R.colors.button} size={35} onPress={() => {navigation.navigate("Details")}} />
            </AbsolutePositionWrapper>

            <AbsolutePositionWrapper top={275} right={5}>
                <IconButton iconName={(isIncome ? "add" : "remove") +"-circle-outline"} color={R.colors.button} size={35}
                            onPress={() => {setIsIncome(!isIncome)}} />
            </AbsolutePositionWrapper>

        </SafeAreaView>
  )
}

export default HomeScreen

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: R.colors.background,
    }
});