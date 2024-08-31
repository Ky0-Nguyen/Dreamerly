import { Dimensions, ScrollView, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { globalStyles } from '../../core';
import { PieChart } from 'react-native-chart-kit';
import { stores } from '../../stores';
import { observer } from 'mobx-react-lite';

const DashBoardScreen = () => {
  const { taskCompleted, taskInReview, taskList, taskInProgress, taskPending } = stores;
  const data = useMemo(() => {
    return [
      { name: 'Completed', count: taskCompleted.length, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Pending', count: taskPending.length, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'In Review', count: taskInReview.length, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'In Progress', count: taskInProgress.length, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ];
  }, [taskCompleted.length, taskInProgress.length, taskInReview.length, taskPending.length]);
  return (
    <ScrollView style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTitle}>Dashboard</Text>
        <View style={globalStyles.iconButton}>
          {/* Icon here, e.g. a notification bell */}
        </View>
      </View>

      {/* Project Summary Cards */}
      <View style={globalStyles.sectionInfo}>
        <View style={[globalStyles.dashboardCard, globalStyles.inProgressCard]}>
          <Text style={globalStyles.cardText}>{taskInProgress.length}</Text>
          <Text style={globalStyles.cardSubText}>In Progress</Text>
        </View>
        <View style={[globalStyles.dashboardCard, globalStyles.inReviewCard]}>
          <Text style={globalStyles.cardText}>{taskInReview.length}</Text>
          <Text style={globalStyles.cardSubText}>In Review</Text>
        </View>
      </View>
      <View style={globalStyles.sectionInfo}>
        <View style={[globalStyles.dashboardCard, globalStyles.onHoldCard]}>
          <Text style={globalStyles.cardText}>{taskPending.length}</Text>
          <Text style={globalStyles.cardSubText}>On Hold</Text>
        </View>
        <View style={[globalStyles.dashboardCard, globalStyles.completedCard]}>
          <Text style={globalStyles.cardText}>{taskCompleted.length}</Text>
          <Text style={globalStyles.cardSubText}>Completed</Text>
        </View>
      </View>

      {/* Project Statistics */}
      <View style={globalStyles.projectStatisticsContainer}>
        <Text style={globalStyles.statisticsTitle}>Project Statistics</Text>
        <View style={globalStyles.chartContainer}>
          {/* Replace with a real chart component */}
          <Text>Chart goes here</Text>
        </View>
        <View style={globalStyles.statisticsDetails}>
          <Text style={globalStyles.statisticsText}>Total working hours: 50:25:06</Text>
        </View>
        <Text style={globalStyles.statisticsText}>Total task activity: {taskList.length}</Text>
      </View>

      <PieChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
        }}
        accessor="count"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
  );
};

export default observer(DashBoardScreen);
