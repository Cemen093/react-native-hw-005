import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const DetailsScreen = ({ data }) => {
    const [selectedInterval, setSelectedInterval] = useState('day');


    return (
        <View style={styles.container}>
            <View style={styles.intervalButtonsContainer}>
                <TouchableOpacity
                    style={[
                        styles.intervalButton,
                        selectedInterval === 'day' && styles.selectedIntervalButton,
                    ]}
                    onPress={() => setSelectedInterval('day')}
                >
                    <Text style={styles.intervalButtonText}>День</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.intervalButton,
                        selectedInterval === 'month' && styles.selectedIntervalButton,
                    ]}
                    onPress={() => setSelectedInterval('month')}
                >
                    <Text style={styles.intervalButtonText}>Месяц</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.intervalButton,
                        selectedInterval === 'year' && styles.selectedIntervalButton,
                    ]}
                    onPress={() => setSelectedInterval('year')}
                >
                    <Text style={styles.intervalButtonText}>Год</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.intervalText}>
                {selectedInterval === 'day'
                    ? 'За последний день'
                    : selectedInterval === 'month'
                        ? 'За последний месяц'
                        : 'За последний год'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    intervalButtonsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    intervalButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
    },
    selectedIntervalButton: {
        backgroundColor: '#6ab04c',
    },
    intervalButtonText: {
        fontSize: 16,
        color: '#000',
    },
    intervalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    balanceChangeText: {
        fontSize: 16,
        marginBottom: 16,
    },
    chartContainer: {
        alignItems: 'center',
    },
});

export default DetailsScreen;
