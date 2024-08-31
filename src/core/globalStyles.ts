import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // General Container
    container: {
      flex: 1,
      backgroundColor: '#F4F1FF',
      paddingTop: 20,
      paddingHorizontal: 16,
    },
    // Dashboard Screen
    dashboardCard: {
      flex: 1,
      minHeight: 150,
      padding: 16,
      borderRadius: 16,
      marginBottom: 15,
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: '#000',
    },
    inProgressCard: {
      backgroundColor: '#C5DFFF',
    },
    inReviewCard: {
      backgroundColor: '#E9D7FE',
    },
    onHoldCard: {
      backgroundColor: '#FEE1A5',
    },
    completedCard: {
      backgroundColor: '#D3FEC9',
    },
    cardText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    cardSubText: {
      fontSize: 16,
      color: '#555',
    },
    projectStatisticsContainer: {
      backgroundColor: '#FFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 15,
    },
    statisticsTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
    },
    chartContainer: {
      marginVertical: 15,
    },
    statisticsDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statisticsText: {
      fontSize: 16,
      color: '#555',
    },
    // Task List Screen
    taskListContainer: {
      flex: 1,
      backgroundColor: '#FFF',
      borderRadius: 16,
      padding: 15,
      marginBottom: 15,
    },
    taskStatus: {
      width: '100%',
      marginBottom: 16,
    },
    statusButton: {
      height: 48,
      marginRight: 16,
      padding: 12,
      borderWidth: 1,
      borderRadius: 20,
    },
    statusButtonActive: {
      backgroundColor: '#ECE6FF',
    },
    statusButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#000',
    },
    taskCard: {
      backgroundColor: '#F4F4F4',
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
    },
    taskTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    taskDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    taskDetailText: {
      fontSize: 14,
      color: '#555',
    },
    taskTagsContainer: {
      flexDirection: 'row',
      marginTop: 5,
    },
    taskTag: {
      borderRadius: 12,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 5,
      backgroundColor: '#ECE6FF',
    },
    taskTagText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#000',
    },
    // Navigation and Header
    headerContainer: {
      paddingTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 16,
    },
    headerTitle: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
      color: '#000',
    },
    iconButton: {
      padding: 10,
      backgroundColor: '#ECE6FF',
      borderRadius: 50,
    },
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#FFF',
      paddingVertical: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    navIconContainer: {
      alignItems: 'center',
    },
    navIcon: {
      width: 24,
      height: 24,
    },
    navLabel: {
      fontSize: 12,
      color: '#555',
      marginTop: 5,
    },
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
      backgroundColor: '#FF80AB',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionInfo: {
       flexDirection: 'row', justifyContent: 'space-between'
    }
  });
