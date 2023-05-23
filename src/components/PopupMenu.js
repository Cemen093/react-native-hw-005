import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import R from "../res/R";
import colors from "../res/colors";

const PopupMenu = ({ isMenuVisible, onClose }) => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        onClose();
    };

    const items = [{key: 1, text: "Назначить пароль"},
        {key: 1, text: "Оценить"}, {key: 1, text: "Написать автору"},
        {key: 1, text: "Рекомендовать другу"}, {key: 1, text: "Вкл/Выкл звук"}]

    const createItem = (item) => {
        return (
            <TouchableOpacity style={styles.menuItem} onPress={() => handleItemClick(item.key)}>
                <Text style={styles.menuItemText}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Modal transparent visible={isMenuVisible} animationType="fade">
            <TouchableOpacity style={styles.overlay} onPress={onClose} />
            <View style={styles.container}>
                <Text style={styles.header}>Расходы ОК</Text>
                <View style={styles.menu}>
                    {items.map((item => (createItem(item))))}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        position: 'absolute',
        top: 60,
        left: 30,
        right: 30,
        backgroundColor: R.colors.popupMenu,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: R.colors.grayText,
    },
    menu: {
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 5,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 4,
        borderBottomWidth: 2,
        borderBottomColor: R.colors.grayText,
    },
    menuItemText: {
        marginLeft: 10,
        fontSize: 19,
        color: R.colors.grayText,
    },
});

export default PopupMenu;