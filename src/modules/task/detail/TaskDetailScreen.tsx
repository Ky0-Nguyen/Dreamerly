import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles'; // Assuming the styles are in a file named styles.js
import commonStyles from '../../styles'

const TaskDetailScreen = ({ route, navigation }) => {
  const { task } = route.params; // Assuming the task object is passed as a route parameter

  return (
    <ScrollView style={commonStyles.container}>
      {/* Header */}
      <View style={commonStyles.headerContainer}>
        <Text style={commonStyles.headerTitle}>Task Details</Text>
        <TouchableOpacity
          style={commonStyles.iconButton}
          onPress={() => navigation.navigate('Edit Task', { task })}
        >
          {/* Edit Icon Here */}
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Task Title */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Task Title</Text>
        <Text style={styles.detailText}>{task.title}</Text>
      </View>

      {/* Task Description */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Task Description</Text>
        <Text style={styles.detailText}>{task.description}</Text>
      </View>

      {/* Task Status */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Status</Text>
        <Text style={styles.detailText}>{task.status}</Text>
      </View>

      {/* Task Priority */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Priority</Text>
        <Text style={styles.detailText}>{task.priority}</Text>
      </View>

      {/* Task Due Date */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Due Date</Text>
        <Text style={styles.detailText}>{task.dueDate}</Text>
      </View>

      {/* Task Tags */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Tags</Text>
        <View style={styles.tagsContainer}>
          {task.tags.map((tag, index) => (
            <View key={index} style={styles.taskTag}>
              <Text style={styles.taskTagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Additional Task Details */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Assigned To</Text>
        <Text style={styles.detailText}>{task.assignedTo}</Text>
      </View>

      {/* Task Actions */}
      <View style={styles.taskActionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert('Mark as Complete')}
        >
          <Text style={styles.actionButtonText}>Mark as Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#F44336' }]}
          onPress={() => alert('Delete Task')}
        >
          <Text style={styles.actionButtonText}>Delete Task</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TaskDetailScreen;
