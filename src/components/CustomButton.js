import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import R from "../res/R";

const CustomButton = ({ title, onPress, style, ...props }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} {...props} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        padding: 12,
        margin: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: R.colors.calcButton,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: R.colors.text,
        fontSize: 40,
    },
});

export default CustomButton;