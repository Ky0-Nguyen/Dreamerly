import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';
import { globalStyles, Priority, Status } from '../../../core';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import { observer } from 'mobx-react-lite';
import { stores } from '../../../stores';

const CreateTaskScreen = ({ navigation }: any) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState(Priority.MEDIUM);
  const [isOpenPriority, setIsOpenPriority] = useState(false);

  const [taskTags, setTaskTags] = useState('');
  const { onCreateTask } = stores;

  const onCreateTriggerNotification = async () => {
    const date = new Date(Date.now());

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime() + 60 * 1000,
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
  };

  const handleCreateTask = async () => {
    await onCreateTask({
      id: new Date().getTime().toString(),
      title: taskTitle, description: taskDescription,
      createdAt: new Date().toString(),
      tags: taskTags.split(','),
      status: Status.TODO,
      category: '',
      reminder: undefined,
      completed: false,
      priority: taskPriority,
    });
    await onCreateTriggerNotification();
    console.log('Task Created:', { taskTitle, taskDescription, taskPriority, taskTags });
    navigation.goBack();
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
        <TouchableOpacity style={styles.textInput} onPress={() => setIsOpenPriority(true)}>
          <Text>{taskPriority}</Text>
        </TouchableOpacity>
        {
          isOpenPriority
            ? <View style={localStyles.modalPriority} >
              {
                [Priority.HIGH, Priority.MEDIUM, Priority.LOW].map((i) => {
                  const onPress = () => {
                    setTaskPriority(i);
                    setIsOpenPriority(false);
                  };
                  return (
                    <TouchableOpacity key={i} onPress={onPress}>
                      <View style={localStyles.priorityItem}>
                        <Text>{i}</Text>
                      </View>
                    </TouchableOpacity>

                  );
                })
              }
            </View>
            : <View />
        }
      </View>

      {/* Task Tags */}
      <View style={[styles.taskInputContainer, { zIndex: -1 }]}>
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

export default observer(CreateTaskScreen);

const localStyles = StyleSheet.create({
  modalPriority: {
    top: 80,
    zIndex: 10,
    borderWidth: 1,
    position: 'absolute',
    borderColor: '#f1f1f1',
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 32,
  },
  priorityItem: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderBottomColor: '#f1f1f1',
  },
});
