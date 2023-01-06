import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function InicioScreen(){
  return(
    <View style={styles.container}>
      <Text style={StyleSheet.text}> 
      Pagina social
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default InicioScreen