import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import styles from './styles';
import { globalStyles } from '../../../core';
import { ROUTE_KEY } from '../../../core/constants';
import { observer } from 'mobx-react-lite';

const TaskDetailScreen = ({ route, navigation }: any) => {
  const { task } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTitle}>Task Details</Text>
        <TouchableOpacity
          style={globalStyles.iconButton}
          onPress={() => navigation.navigate(ROUTE_KEY.EDIT_TASK, { task })}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Task Title */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Task Title</Text>
        <View style={styles.containerDetail}>

          <Text style={styles.detailText}>{task.title}</Text>
        </View>
      </View>

      {/* Task Description */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Task Description</Text>
        <View style={styles.containerDetail}>
          <Text style={styles.detailText}>{task.description}</Text>
        </View>
      </View>

      {/* Task Status */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Status</Text>
        <View style={styles.containerDetail}>
          <Text style={styles.detailText}>{task.status}</Text>
        </View>
      </View>

      {/* Task Priority */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Priority</Text>
        <View style={styles.containerDetail}>
          <Text style={styles.detailText}>{task.priority}</Text>
        </View>
      </View>

      {/* Task Due Date */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Due Date</Text>
        <View style={styles.containerDetail}>
          <Text style={styles.detailText}>{task.dueDate}</Text>
        </View>
      </View>

      {/* Task Tags */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Tags</Text>

        <View style={styles.tagsContainer}>
          {task.tags.map((tag: any, index: number) => (
            <View key={index} style={styles.taskTag}>
              <Text style={styles.taskTagText}>{tag}</Text>
            </View>
          ))}
        </View>

      </View>

      {/* Additional Task Details */}
      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Assigned To</Text>
        <View style={styles.containerDetail}>
          <Text style={styles.detailText}>{task.assignedTo}</Text>
        </View>
      </View>

      {/* Task Actions */}
      <View style={styles.taskActionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => Alert.alert('Mark as Complete')}
        >
          <Text style={styles.actionButtonText}>Mark as Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#F44336' }]}
          onPress={() => Alert.alert('Delete Task')}
        >
          <Text style={styles.actionButtonText}>Delete Task</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={navigation.goBack}>
        <Text style={styles.submitButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={stylesInternal.footer} />
    </ScrollView>
  );
};

export default observer(TaskDetailScreen);

const stylesInternal = StyleSheet.create({
  footer: {
    height: 100,
    width: '100%',
  },
});
