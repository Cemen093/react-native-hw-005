import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IconButton from './IconButton';

const AbsoluteIconButton = ({ iconName, size, onPress, top, left }) => {
    const buttonStyle = {
        position: 'absolute',
        top,
        left,
    };

    return (
        <TouchableOpacity style={[styles.buttonContainer, buttonStyle]}>
            <IconButton iconName={iconName} size={size} onPress={onPress} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {},
});

export default AbsoluteIconButton;