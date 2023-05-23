import {StyleSheet, TextInput, View} from 'react-native';

const CustomTextInput = (value, onChangeText, placeholder = "Введите текст") => {

    return (
        <View>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'white',
        backgroundColor: "rgba(0, 0, 0, 0)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default CustomTextInput;