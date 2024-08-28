import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CreateTaskScreen, EditTaskScreen, TaskDetailScreen, TaskListScreen } from '../modules/task';
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoardScreen } from '../modules/dashboard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TaskStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TaskList" component={TaskListScreen} />
            <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
            <Stack.Screen name="Create Task" component={CreateTaskScreen} />
            <Stack.Screen name="Edit Task" component={EditTaskScreen} />
        </Stack.Navigator>
    );
}
const Navigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Dashboard"
                component={DashBoardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="analytics" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={TaskStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigator;
