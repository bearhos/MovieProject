import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TabText = ({label}) => {
    const [focus, setFocus] = useState(false);
    const blur = () => {
        setFocus(false)
      };
      const customStyle = focus ? styles.textActive : styles.text;
  return (
    
      <Text style={customStyle}     onPress={() => setFocus(!focus)}>
          {label}
      </Text>
  )
}
const styles = StyleSheet.create({
    text: {
     color: '#fff',
     fontSize: 20,

    },
    textActive: {
        color: 'orange',
        fontSize: 20,
   
       }
    
})
export default TabText