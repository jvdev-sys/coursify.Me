import { StyleSheet, Dimensions, View, StatusBar, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import { Colors } from '../../services/constants'
import PostCard from '../../components/PostCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ModalPicker from '../../components/ModalPicker'
import Icon from '../../services/loadFont'

const WIDTH = Dimensions.get('screen').width;

const Home = ({ route, navigation}) => {

  const { categories, media, posts } = route.params
  const [option, setOption] = useState('Padrão')
  const [iconOption, setIconOption] = useState(isModalVisible ? 'expand-less' : 'expand-more')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [options, setOptions] = useState([
    { value: 'Padrão', selected: false },
    { value: 'A-Z', selected: false },
    { value: 'Z-A', selected: false },
    { value: 'Mais Visualizados', selected: false },
    { value: 'Menos Visualizados', selected: false },
  ])

  const onSelectedValue = (option) => {
    setOption(option.value);
    let newOptions = options.map(item => item)
    newOptions.forEach(item => item !== option ? item.selected = false : item.selected = true)
    setOptions(newOptions);
    console.log(options)
    setIconOption('expand-more');
    setIsModalVisible(false);
  }

  const navigate = (post, mediaURL) => {
    navigation.navigate('Post', {
      post: post,
      mediaURL: mediaURL
    })
  }

  const mountMenu = (option, index) => {
    return (
      <TouchableOpacity 
        key={index} 
        style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
        onPress={() => onSelectedValue(option)}
        >
        <Text style={styles.selectButtonText}>{option.value}</Text>
        {option.selected &&
          <Icon
            style={styles.icon}
            name={'check'}
          />
        }
      </TouchableOpacity>
    );
  }

  const categoryScrollView = (category, index) => {
    return (
      <ScrollView key={index}>
        <Header title={category.name} />
        <ScrollView horizontal={true}>
            {
              posts.filter(post => post.categories.includes(category.id))
              ?.map((post, index) => mountCard(post, index))
            }
        </ScrollView>
      </ScrollView>
    );
  }

  

  const mountCard = (post, index) => {
    let mediaPost = media.filter(media => media.id === post.featured_media)
    if (mediaPost.length > 0) {
      let mediaURL = mediaPost[0].media_details.sizes.medium.source_url
      let mediaThumb = mediaPost[0].media_details.sizes.medium.source_url
      return (<PostCard post={post} key={index} mediaURL={mediaURL} onPress={() => navigate(post, mediaThumb)}/>);
    }
    else {
      let mediaThumb = 'https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/25928/coursify-me.png'
      return (<PostCard post={post} key={index} mediaURL={mediaThumb} onPress={() => navigate(post, mediaThumb)}/>);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />

      <View >
        
        {posts && categories &&
        <ScrollView>
            <View style={styles.orderView}>
              <Text style={styles.orderText}>ORDENAR POR</Text>
              <TouchableOpacity 
                style={[styles.selectButton, isModalVisible ? styles.selectButtonPressed: styles.selectButtonReleased]} 
                onPress={() => {
                  setIsModalVisible(!isModalVisible); 
                  if(iconOption === 'expand-more') {
                    setIconOption('expand-less')
                  }
                }}>
                <Text style={styles.selectButtonText}>{option}</Text>
                <Icon
                  style={styles.icon}
                  name={iconOption}
                />
              </TouchableOpacity>
              
            </View>
            <ScrollView style={styles.viewScrollers}>
              <Header title={'Todos os Posts'} />

              <ScrollView horizontal={true}>
                {
                  posts.map((post, index) => mountCard(post, index))
                }
              </ScrollView>

              {
                categories.map((category, index) => {
                  if (posts.filter(post => post.categories.includes(category.id)).length > 0) {
                    return categoryScrollView(category, index)
                  }
                  else{
                    return 
                  }
                })
              }
              {isModalVisible &&
                <View style={styles.menu} >
                  {options.map((item, index) => mountMenu(item, index))}
                </View>
              }
              
            </ScrollView>
            <Footer/>
        </ScrollView>
          
        }

      </View>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    justifyContent: 'center',
    backgroundColor: Colors.white,

  },
  viewScrollers: {
    paddingHorizontal: 10,
  },
  orderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  orderText: {
    color: Colors.darkGrey,
    fontWeight: '700',
    marginLeft: 20,
    fontSize: 17,
  },
  selectButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    height: 60,
    paddingVertical: 10,
    marginRight: 20,
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    backgroundColor: Colors.white,
  },
  selectButtonPressed:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  selectButtonReleased: {
    borderRadius: 10,
  },
  selectButtonText: {
    fontSize: 14,
    color: Colors.darkGrey,
    width: 80,
    marginHorizontal: 10,
  },
  icon: {
    color: Colors.darkGrey,
    fontSize: 24,
    backgroundColor: Colors.white,
    marginRight: 10,
  },
  menu: {
    position: 'absolute',
    backgroundColor: Colors.white,
    top: -1,
    right: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 141,
    height: 200,
    paddingVertical: 10,
    marginRight: 0,
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

})