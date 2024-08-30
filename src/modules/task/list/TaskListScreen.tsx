import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles, TaskType } from '../../../core'; // Assuming the styles are in a file named globalStyles.js
import { ROUTE_KEY } from '../../../core/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { stores } from '../../../stores';
import { startCase } from 'lodash';
import moment from 'moment';


const TaskListScreen = ({ navigation }: any) => {

  const { taskCompleted, taskInReview, taskTodo } = stores;
  const renderItem = ({ item }: { item: TaskType }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(ROUTE_KEY.TASK_DETAIL, { task: item })}>
        <View style={globalStyles.taskCard}>
          <Text style={globalStyles.taskTitle}>{item.title}</Text>
          <View style={globalStyles.taskDetails}>
            <Text style={globalStyles.taskDetailText}>{`${startCase(item?.priority ?? '')} • On Track`}</Text>
            <Text style={globalStyles.taskDetailText}>{moment(item.createdAt).format('YYYY-MM-DD')}</Text>
          </View>
          <View style={globalStyles.taskTagsContainer}>
            <View style={globalStyles.taskTag}>
              <Text style={globalStyles.taskTagText}>{item.category}</Text>
            </View>
          </View>

          <View style={globalStyles.taskTagsContainer}>
            {
              item.tags.map((tag, index) => {
                return (
                  <View key={index.toString()} style={globalStyles.taskTag}>
                    <Text style={globalStyles.taskTagText}>{tag}</Text>
                  </View>
                );
              })
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [statusSelected, setStatusSelected] = useState<'completed'| 'in-review' | 'todo'>('completed');

  const arrTask =  useMemo(()=> {
    if(statusSelected  === 'completed') {return taskCompleted;}
    if(statusSelected  === 'in-review') {return taskInReview;}
    if(statusSelected  === 'todo') {return taskTodo;}
    return [];
  },[statusSelected, taskCompleted, taskInReview, taskTodo]);

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTitle}>Task List</Text>
        <View style={globalStyles.iconButton}>
          {/* Icon here */}
        </View>
      </View>

      {/* Task Status Filter */}
      <View style={globalStyles.taskStatus}>
        <TouchableOpacity onPress={()=> setStatusSelected('completed')} style={[globalStyles.statusButton, globalStyles.statusButtonActive]}>
          <Text style={globalStyles.statusButtonText}>{`Complete ${taskCompleted.length}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setStatusSelected('todo')} style={globalStyles.statusButton}>
          <Text style={globalStyles.statusButtonText}>{`To Do ${taskTodo.length}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> setStatusSelected('in-review')} style={globalStyles.statusButton}>
          <Text style={globalStyles.statusButtonText}>{`In Review ${taskInReview.length}`}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <FlatList data={arrTask} renderItem={renderItem} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate(ROUTE_KEY.CREATE_TASK)} style={globalStyles.floatingButton}>
        <AntDesign name="plus" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskListScreen;
