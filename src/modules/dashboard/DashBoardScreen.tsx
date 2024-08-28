import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../styles';

type Props = {}

const DashBoardScreen = (props: Props) => {
  return (
    <ScrollView style={commonStyles.container}>
      {/* Header */}
      <View style={commonStyles.headerContainer}>
        <Text style={commonStyles.headerTitle}>Dashboard</Text>
        <View style={commonStyles.iconButton}>
          {/* Icon here, e.g. a notification bell */}
        </View>
      </View>

      {/* Project Summary Cards */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[commonStyles.dashboardCard, commonStyles.inProgressCard]}>
          <Text style={commonStyles.cardText}>24</Text>
          <Text style={commonStyles.cardSubText}>In Progress</Text>
        </View>
        <View style={[commonStyles.dashboardCard, commonStyles.inReviewCard]}>
          <Text style={commonStyles.cardText}>56</Text>
          <Text style={commonStyles.cardSubText}>In Review</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[commonStyles.dashboardCard, commonStyles.onHoldCard]}>
          <Text style={commonStyles.cardText}>16</Text>
          <Text style={commonStyles.cardSubText}>On Hold</Text>
        </View>
        <View style={[commonStyles.dashboardCard, commonStyles.completedCard]}>
          <Text style={commonStyles.cardText}>45</Text>
          <Text style={commonStyles.cardSubText}>Completed</Text>
        </View>
      </View>

      {/* Project Statistics */}
      <View style={commonStyles.projectStatisticsContainer}>
        <Text style={commonStyles.statisticsTitle}>Project Statistics</Text>
        <View style={commonStyles.chartContainer}>
          {/* Replace with a real chart component */}
          <Text>Chart goes here</Text>
        </View>
        <View style={commonStyles.statisticsDetails}>
          <Text style={commonStyles.statisticsText}>Total working hours: 50:25:06</Text>
          <Text style={commonStyles.statisticsText}>Total task activity: 125</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default DashBoardScreen
