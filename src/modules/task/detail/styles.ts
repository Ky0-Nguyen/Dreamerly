import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Existing styles...

    // Task Detail Section
    detailSection: {
      marginBottom: 20,
    },
    detailLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#555',
      marginBottom: 5,
    },
    containerDetail: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      backgroundColor: '#FFF',
    },
    detailText: {
      fontSize: 18,
      color: '#000',
      padding: 15,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    taskTag: {
      backgroundColor: '#E0E0E0',
      borderRadius: 8,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 8,
      marginBottom: 8,
    },
    taskTagText: {
      fontSize: 14,
      color: '#555',
    },

    // Task Actions
    taskActionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    actionButton: {
      width: '48%',
      backgroundColor: '#4CAF50',
      borderRadius: 12,
      paddingVertical: 15,
      alignItems: 'center',
    },
    actionButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFF',
    },
     // Submit Button
     submitButton: {
      backgroundColor: '#FF80AB',
      borderRadius: 12,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    submitButtonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFF',
    },
  });
