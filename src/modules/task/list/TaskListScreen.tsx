import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles'; // Assuming the styles are in a file named styles.js

const TaskListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Task List</Text>
        <View style={styles.iconButton}>
          {/* Icon here */}
        </View>
      </View>

      {/* Task Status Filter */}
      <View style={styles.taskStatus}>
        <TouchableOpacity style={[styles.statusButton, styles.statusButtonActive]}>
          <Text style={styles.statusButtonText}>Complete 65</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>To Do 45</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>In Review 3</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Task Card 1 */}
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Dashboard design for admin</Text>
          <View style={styles.taskDetails}>
            <Text style={styles.taskDetailText}>High • On Track</Text>
            <Text style={styles.taskDetailText}>14 Oct 2022</Text>
          </View>
          <View style={styles.taskTagsContainer}>
            <View style={styles.taskTag}>
              <Text style={styles.taskTagText}>Meeting</Text>
            </View>
          </View>
        </View>

        {/* Task Card 2 */}
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Konom web application</Text>
          <View style={styles.taskDetails}>
            <Text style={styles.taskDetailText}>Low • Meeting</Text>
            <Text style={styles.taskDetailText}>14 Nov 2022</Text>
          </View>
          <View style={styles.taskTagsContainer}>
            <View style={styles.taskTag}>
              <Text style={styles.taskTagText}>Design</Text>
            </View>
          </View>
        </View>

        {/* Add more task cards as needed */}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        {/* Plus Icon here */}
      </TouchableOpacity>
    </View>
  );
};

export default TaskListScreen;