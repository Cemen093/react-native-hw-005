import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "./CustomButton";

const STORAGE_KEY = 'myTasks';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Функция для загрузки задач из AsyncStorage
    const loadTasks = async () => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);
            console.log(data);
            if (data) {
                setTasks(JSON.parse(data));
            }
        } catch (error) {
            console.log('Error loading tasks', error);
        }
    };

    // Функция для сохранения задач в AsyncStorage
    const saveTasks = async (tasks) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.log('Error saving tasks', error);
        }
    };

    // Загрузка задач при монтировании компонента
    useEffect(() => {
        loadTasks();
    }, []);

    // Функция для добавления задачи
    const addTask = () => {
        const newTasks = [...tasks, { id: Math.random().toString(36).substring(2, 10), text: newTask }];
        setTasks(newTasks);
        setNewTask('');
        saveTasks(newTasks);
    };

    // Функция для удаления задачи
    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    // Рендеринг каждой задачи в списке
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text>{item.text}</Text>
            <Button title="X" onPress={() => deleteTask(item.id)} />
        </View>
    );

    return (
        <View style={{ padding: 20 }}>
            <Text>Task List</Text>
            <TextInput
                value={newTask}
                onChangeText={setNewTask}
                placeholder="Введите задачу"
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
            />
            <Button title="Добавить задачу" onPress={addTask} />
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={{ marginTop: 20 }}
            />
        </View>
    );
};

export default TaskList;