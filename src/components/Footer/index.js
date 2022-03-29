import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import FooterLogo from '../../assets/logo-coursify-w.png'
import { Colors } from '../../services/constants'


const Footer = () => {
  return (
      <View style={styles.footer}>
          <Image
              style={styles.footerImage}
              source={FooterLogo}
          />
          <Text style={styles.footerText}>
              O Coursify.me é uma plataforma de ensino a distância,
              onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
          </Text>
          <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL('https://coursify.me')}>
              <Text style={{color: Colors.white}}>
                  Quero conhecer a plataforma!
              </Text>
          </TouchableOpacity>
      </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        backgroundColor: Colors.mediumSeaGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
    },
    footerImage: {
        width: 172,
        height: 45,
        resizeMode: 'contain',
        margin: 10,
    },
    footerText: {
        color: Colors.white,
        fontSize: 14,
        paddingHorizontal: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    footerButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        margin: 15,
        borderRadius: 30,
        backgroundColor: Colors.darkYellow,
    },
})