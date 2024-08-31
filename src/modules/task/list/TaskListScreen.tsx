import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { globalStyles, Status, TaskType } from '../../../core';
import { ROUTE_KEY } from '../../../core/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { stores } from '../../../stores';
import { startCase } from 'lodash';
import moment from 'moment';
import { observer } from 'mobx-react-lite';


const TaskListScreen = ({ navigation }: any) => {

  const { taskCompleted, taskInReview, taskTodo, taskInProgress, taskPending } = stores;
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

  const [statusSelected, setStatusSelected] = useState<Status>(Status.COMPLETED);

  const arrTask = useMemo(() => {
    if (statusSelected === Status.COMPLETED) { return taskCompleted; }
    if (statusSelected === Status.IN_REVIEW) { return taskInReview; }
    if (statusSelected === Status.TODO) { return taskTodo; }
    if (statusSelected === Status.PENDING) { return taskPending; }
    if (statusSelected === Status.IN_PROGRESS) { return taskInProgress; }
    return [];
  }, [statusSelected, taskCompleted, taskInProgress, taskInReview, taskPending, taskTodo]);

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
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={globalStyles.taskStatus}>
          {
            [Status.COMPLETED, Status.IN_PROGRESS, Status.IN_REVIEW, Status.PENDING, Status.TODO].map((i) => {
              let title = '';
              switch (i) {
                case Status.COMPLETED:
                  title = `Completed ${taskCompleted.length}`;
                  break;
                case Status.IN_PROGRESS:
                  title = `In progress ${taskInProgress.length}`;
                  break;
                case Status.IN_REVIEW:
                  title = `In review ${taskInReview.length}`;
                  break;
                case Status.PENDING:
                  title = `Pending ${taskPending.length}`;
                  break;
                case Status.TODO:
                  title = `Todo ${taskTodo.length}`;
                  break;
                default:
                  break;
              }
              return (
                <TouchableOpacity key={i}
                onPress={() => setStatusSelected(i)}
                style={[globalStyles.statusButton, statusSelected === i && globalStyles.statusButtonActive]}>
                  <Text style={globalStyles.statusButtonText}>{title}</Text>
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>
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

export default observer(TaskListScreen);
