import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../services/loadFont'
import { Colors } from '../../services/constants'

const ViewMoreButton = () => {
  return (
      <TouchableOpacity
          onPress={() => { }}
          style={styles.viewMoreButton}
      >
          <Text style={styles.viewMore}>VER MAIS</Text>
          <Icon
              style={styles.viewMoreIcon}
              name='play-arrow'
          />
      </TouchableOpacity>
  )
}

export default ViewMoreButton

const styles = StyleSheet.create({
    viewMoreIcon: {
        color: Colors.darkGrey,
        fontSize: 17,
        fontWeight: 'bold',
        backgroundColor: Colors.white,
        paddingHorizontal: 5,
    },
    viewMoreButton: {
        flexDirection: 'row'
    },
    viewMore: {
        fontSize: 17,
        color: Colors.darkGrey,
    },

})