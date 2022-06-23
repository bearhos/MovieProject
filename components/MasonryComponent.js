import { View, Text,TouchableOpacity,Image } from 'react-native'
import React, { useMemo } from 'react'
import FastImage from 'react-native-fast-image'

const MasonryComponent = (props,{tabActive}) => {
    
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <TouchableOpacity onPress={() => props.navigatione.navigate('Detail',{
        id: props.data.id,
        cate: props.data.cate
    }) }>
        <FastImage resizeMode="stretch" source={{uri: props.data.uri}} style={{width: props.style.width,   height: randomBool ? 160 : 184, margin: props.style.margin, borderRadius:18}}/>
        <Text style={{color:'white', marginLeft: 10,marginVertical:5,width: props.style.width,fontSize:16}}>{props.tabActive === 1 ? props.data.title : props.data.name}</Text>
    </TouchableOpacity>
  )
}

export default MasonryComponent