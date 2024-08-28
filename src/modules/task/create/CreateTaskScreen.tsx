import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; // Assuming the styles are in a file named styles.js
import commonStyles from '../../styles'

const CreateTaskScreen = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskTags, setTaskTags] = useState('');

  const handleCreateTask = () => {
    // Handle task creation logic
    console.log('Task Created:', { taskTitle, taskDescription, taskPriority, taskTags });
    navigation.goBack(); // Go back to the previous screen after creating the task
  };

  return (
    <ScrollView style={commonStyles.container}>
      {/* Header */}
      <View style={commonStyles.headerContainer}>
        <Text style={commonStyles.headerTitle}>Create Task</Text>
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
    </ScrollView>
  );
};

export default CreateTaskScreen;
