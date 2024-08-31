import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CreateTaskScreen, EditTaskScreen, TaskDetailScreen, TaskListScreen } from '../modules/task';
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoardScreen } from '../modules/dashboard';
import { ROUTE_KEY } from '../core/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TaskStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTE_KEY.TASK_LIST} component={TaskListScreen} />
        </Stack.Navigator>
    );
};
const TabNavigator = () => {

    const renderTabBarIcon = ({ color, size, name }: any): React.JSX.Element => (
        <Ionicons name={name} color={color} size={size} />
    );

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Dashboard"
                component={DashBoardScreen}
                options={{ tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: 'analytics' }) }}
            />
            <Tab.Screen
                name="Tasks"
                component={TaskStack}
                options={{ tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: 'list' }) }}
            />
        </Tab.Navigator>
    );
};

const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabBar" component={TabNavigator} />
            <Stack.Screen name={ROUTE_KEY.TASK_DETAIL} component={TaskDetailScreen} />
            <Stack.Screen name={ROUTE_KEY.CREATE_TASK} component={CreateTaskScreen} />
            <Stack.Screen name={ROUTE_KEY.EDIT_TASK} component={EditTaskScreen} />
        </Stack.Navigator>
    );

};

export default Navigator;
