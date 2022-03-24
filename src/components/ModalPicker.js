import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Colors } from '../services/constants';


const ModalPicker = ({
    data,
    isModalVisible,
    setIsModalVisible,
    onSelectedValue,
    setIconOption
}) => {

    const onPressItem = (data) =>{
        setIsModalVisible(false);
        onSelectedValue(data);
    }

    const options = data.map((item, index) =>
        <TouchableOpacity 
            style={styles.option} 
            onPress={()=> onPressItem(item)} 
            key={index}
        >
            <Text style={styles.itemOption}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={()=> alert('Clicou!')}>
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType={'none'}
                onRequestClose={() => { alert('Clicou!') }}
            >
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => setIsModalVisible(false)}
                >
                    <View style={styles.modal}>
                        <ScrollView>
                            {options}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>

        </TouchableWithoutFeedback>
        
        
        
        
    )
}

export default ModalPicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'flex-start',
    },
    modal: {
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: Colors.darkGrey,
        width: 140,
        height: 200,
        marginRight: 20,
        marginTop: 125,
    },
    option:{
        alignItems: 'flex-start',
    },
    itemOption:{
        color: Colors.darkGrey,
        margin: 10,
        fontSize: 14,
        
    }
})
