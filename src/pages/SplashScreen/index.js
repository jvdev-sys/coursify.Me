import { StyleSheet, StatusBar, Image, View, Dimensions } from 'react-native'
import React from 'react'
import Logo from '../../assets/logo.png'
import  {Svg, Path } from 'react-native-svg';
import { svgLogoDown, svgLogoUpper, Colors } from '../../services/constants';
import { useEffect, useCallback } from 'react';
import api from '../../services/api'

const WIDTH = Dimensions.get('screen').width;

const SplashScreen = ({navigation}) => {;


    useEffect(() => {
        loadApiData();
        
    }, [])


    const loadApiData = useCallback(async () => {
        //Consome os dados da API fornecida  
        try {
            const responseMedia = await api.get(`/media/`);
            const responseCategories = await api.get(`/categories/`);
            const responsePosts = await api.get(`/posts/`);
            
            await navigation.replace('Home', {
                categories: JSON.parse(JSON.stringify(responseCategories.data)),
                media: JSON.parse(JSON.stringify(responseMedia.data)),
                posts: JSON.parse(JSON.stringify(responsePosts.data)),
            });

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
               />
            <Svg
                width={WIDTH}
                height={300}
                viewBox={`50 15 100 200`}
            >
                <Path
                    d={svgLogoUpper}
                    fill={'#fbfbfb'}
                    transform="translate(0 ,10)"
                    stroke="#f9f9f9"
                    strokeWidth={1}
                />
            </Svg>
            <Image source={Logo} style={styles.splashLogo} />

            <Svg
                width={WIDTH}
                height={300}
                viewBox={`-50 20 ${WIDTH} 50`}
            >
                <Path
                    d={svgLogoDown}
                    fill={'#fbfbfb'}
                    transform="translate(0 ,10)"
                    stroke="#f9f9f9"
                    strokeWidth={1}
                />
            </Svg>
    
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
    },
    
    splashLogo: {
        alignSelf:'center',
        padding: 20,
        resizeMode:'contain',
    }
})