import {Text, View, StyleSheet } from "react-native";
import R from "../res/R";


const DailyAccountChange = ({value, isIncome, ...props}) => {
  return(
      <View style={styles.container}>
          <Text style={styles.test}>
              {isIncome ? "Заработано" : "Потрачено"} сегодня {value}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: R.colors.calcButton
    },
    test: {
        color: R.colors.text,
        margin: 3,
        fontSize: 17,
    }
});

export default DailyAccountChange;