import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../services/constants'

const PostCard = ({ post, onPress, mediaURL ='https://blog.coursify.me/wp-content/uploads/2019/07/sell-on-social-networks-cover-coursfiyme-150x150.jpg'}) => {
    

  return (
      <TouchableOpacity onPress={onPress}>
          <View style={styles.cardContainer}>
              <Image
                  style={styles.tinyLogo}
                  source={{
                      uri: mediaURL,
                  }}
              />
              <View style={styles.textBox}>
                  <Text style={styles.categoryName}>{post.title.rendered.substring(0, 30)}...</Text>
                  <Text style={styles.postName}>{post.content.rendered.replace(/<.*?>/g, '').substring(0, 120)}...</Text>
                  <Text style={styles.readMore}>Leia mais</Text>
              </View>

          </View>
      </TouchableOpacity>
        
  )
}

export default PostCard

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 2,
        borderWidth: 0.05,
        borderColor: Colors.darkGrey,
        width: 235,
        height: 325,
        margin: 10,
    },
    textBox: {
        flex: 1,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 10,
        padding: 10, 
    },
    tinyLogo: {
        width: 235,
        height: 100,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    categoryName: {
        color: Colors.darkSeaGreen,
        fontWeight: 'bold',
        fontSize: 17,

    },
    postName: {
        paddingVertical: 15,
        color: Colors.lightGrey,
        fontSize: 15,

    },
    readMore: {
        color: Colors.darkYellow,
        fontSize: 16
    }
})