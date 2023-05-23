import React from 'react';
import { View, StyleSheet } from 'react-native';

const AbsolutePositionWrapper = ({ children, ...props }) => {
    return (
        <View style={styles.container} {...props}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
});

export default AbsolutePositionWrapper;