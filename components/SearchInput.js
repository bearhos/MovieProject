import { View, Text,TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const SearchInput = ({handleOnchange,value}) => {
    const [focus, setFocus] = useState(false);
    const blur = (e) => {
        setFocus(false)
        
      };
      const customStyle = focus ? [styles.inputForcus, styles.input] : styles.input;
  return (
    <View>
    
    <TextInput
        onBlur={blur}
        placeholder={'Spider man'}
        style={
          customStyle
        }
        onEndEditing={(e) => handleOnchange(e.nativeEvent.text)}
        placeholderTextColor="#BBBBBB"
        onFocus={() => setFocus(true)}
        value={value}
        onChangeText={(e)  => handleOnchange(e)}
      >
         
      </TextInput>
      <Icon name='search' color='white' size={20} style={styles.icon}>
        
        </Icon>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      backgroundColor: '#211F30',
      marginBottom: 20,
      marginHorizontal: 10,
      borderRadius: 50,
      paddingHorizontal: 50,
      paddingVertical: 15,
      color: 'white',
      fontSize: 16,
    },
    inputForcus: {
      borderColor: 'white',
      borderWidth: 1,
    },
    icon:{
        position: 'absolute',
        top: 20,
        left: 30

    }
})
export default SearchInput