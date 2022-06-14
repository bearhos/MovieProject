import { View, Text,Image,Animated } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
const HEADER_HEIGHT = 350
const Container = styled.View`
    flex: 1;
    align-items: center;
`
const HeaderImage = styled.Image`
    height: ${HEADER_HEIGHT} ;
    width: 200%;
`
const Header = () => {
  return (
    <Container>
        <Animated.Image 
        source={Poster}
        resizeMode='contain'
        style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
                {
                    translateY: scrollY.interpolate({
                        inputRange: [-HEADER_HEIGHT,0,HEADER_HEIGHT],
                        outputRange: [-HEADER_HEIGHT/2,0,HEADER_HEIGHT *0.75]
                    })
                }
            ]
        
        }}
        
        />
    </Container>
  )
}

export default Header