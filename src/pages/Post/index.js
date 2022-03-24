import { StyleSheet, View, ScrollView } from 'react-native'
import React  from 'react'
import { Colors, styleCSS, divIn, divOut } from '../../services/constants';
import AutoHeightWebView from 'react-native-autoheight-webview'

const Post = ({ route }) => {

    const { post, mediaURL } = route.params;

    const header = `
        <h1 style="
            width: 100%;
            text-align: center;
            height: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 24px;
            color: #2AB598;
            ">${post.title.rendered}
        </h1>
    `;

    const thumbnail = `
        <img class="aligncenter size-full wp-image-5050"
            src=${mediaURL}
            style="width: 100%; height: auto; margin-bottom: 30px;"
            />
    `;

    return (
    <View
        style={[, styles.container, { flex: 1, textAlign: 'center' }]}
    >
        <ScrollView style={{ textAlign: 'center' }}>
            {/* <Header title={post.title.rendered} viewMore={false}/> */}
            <AutoHeightWebView
                style={{ flex: 1 }}
                customStyle={styleCSS}
                source={{
                    html:
                        divIn +
                        header +
                        thumbnail +
                        post.content.rendered +
                        divOut
                }}
            />
            
        </ScrollView>
    </View>
                  
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        color: Colors.darkSeaGreen,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        color: '#000',
    }

})