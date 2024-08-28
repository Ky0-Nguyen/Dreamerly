import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; // Assuming the styles are in a file named styles.js
import commonStyles from '../../styles';

const EditTaskScreen = ({ route, navigation }:any) => {
  const { task } = route.params; // Assuming the task object is passed as a route parameter
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskPriority, setTaskPriority] = useState(task.priority);
  const [taskTags, setTaskTags] = useState(task.tags.join(', '));

  const handleEditTask = () => {
    // Handle task editing logic
    console.log('Task Updated:', { taskTitle, taskDescription, taskPriority, taskTags });
    navigation.goBack(); // Go back to the previous screen after editing the task
  };

  return (
    <ScrollView style={commonStyles.container}>
      {/* Header */}
      <View style={commonStyles.headerContainer}>
        <Text style={commonStyles.headerTitle}>Edit Task</Text>
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

      {/* Save Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleEditTask}>
        <Text style={styles.submitButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditTaskScreen;
