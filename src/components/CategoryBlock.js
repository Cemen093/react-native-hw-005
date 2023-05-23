import {View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import R from "../res/R";


const CategoryBlock = ({categories, addTransaction, ...props}) => {
    const createCategory = (category) => {
        return (
            <TouchableOpacity key={category.key} style={styles.item}
                onPress={() => {addTransaction(category.key)}}>
                <Image source={category.image} style={styles.image}/>
                <Text style={styles.text}>{category.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container} {...props}>
            {categories.map((category) => createCategory(category))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 3,
    },
    item: {
        width: "21%",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    text: {
        color: R.colors.text,
        fontSize: 15,
    }
})

export default CategoryBlock;