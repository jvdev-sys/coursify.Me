import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../services/constants';
import ViewMoreButton from '../ViewMoreButton';

const Header = ({title, viewMore = true}) => {
    return (
        <View style={[viewMore ? styles.postHeaderBetween : styles.postHeaderCenter]}>
            <Text style={styles.titleText}>{viewMore ? title.toUpperCase() : title }</Text>
            {viewMore && 
                <ViewMoreButton />
            }
        </View>
    );
}

export default Header

const styles = StyleSheet.create({
    titleText: {
        color: Colors.darkSeaGreen,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
    },
    postHeaderBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 10,
    },
    postHeaderCenter: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 20,
    },
})