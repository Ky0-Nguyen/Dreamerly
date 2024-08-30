import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; // Assuming the styles are in a file named styles.js
import { globalStyles } from '../../../core';
// import PushNotification from 'react-native-push-notification';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

const CreateTaskScreen = ({ navigation }: any) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskTags, setTaskTags] = useState('');

  const onCreateTriggerNotification = async () => {
    const date = new Date(Date.now());
    date.setHours(11);
    date.setMinutes(10);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger,
    );
  }

  const handleCreateTask = async () => {
    // Handle task creation logic
    // PushNotification.localNotificationSchedule({
    //   message: 'Reminder for your task', // Message to display
    //   date: new Date(Date.now() + 1 * 1000), // Reminder time
    // });
    await onCreateTriggerNotification();
    console.log('Task Created:', { taskTitle, taskDescription, taskPriority, taskTags });
    navigation.goBack(); // Go back to the previous screen after creating the task
  };

  return (
    <ScrollView style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTitle}>Create Task</Text>
      </View>

      {/* Task Title */}
      <View style={styles.taskInputContainer}>
        <Text style={styles.inputLabel}>Task Title</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter task title"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
      </View>

      {/* Task Description */}
      <View style={styles.taskInputContainer}>
        <Text style={styles.inputLabel}>Task Description</Text>
        <TextInput
          style={[styles.textInput, { height: 100 }]}
          placeholder="Enter task description"
          multiline
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
      </View>

      {/* Task Priority */}
      <View style={styles.taskInputContainer}>
        <Text style={styles.inputLabel}>Priority</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter task priority (e.g., High, Medium, Low)"
          value={taskPriority}
          onChangeText={setTaskPriority}
        />
      </View>

      {/* Task Tags */}
      <View style={styles.taskInputContainer}>
        <Text style={styles.inputLabel}>Tags</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter task tags (e.g., Meeting, Design)"
          value={taskTags}
          onChangeText={setTaskTags}
        />
      </View>

      {/* Create Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleCreateTask}>
        <Text style={styles.submitButtonText}>Create Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.goBack()}>
        <Text style={styles.submitButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateTaskScreen;
