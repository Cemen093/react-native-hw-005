import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconName="menu", size=24, color="white", onPress, ...props}) => {
    return (
        <TouchableOpacity style={styles.button} {...props} onPress={onPress}>
            <Ionicons name={iconName} size={size} color={color} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(0,0,0,0)',
    }
});

export default IconButton;