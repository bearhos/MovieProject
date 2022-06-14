import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Poster from '../assets/Poster.jpg'
const Container = styled.View`
  flex: 1;
  background-color: #15141F;
  align-items:center;
`
const ColumnContainer = styled.View`
  height: 70px;
  width: 90%;
  margin-top: 10px;
  background-color: #211F30;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;

`

const Avatar = styled.View`
 align-items:center;
  justify-content: center;
  margin-left: 10px;
`
const ImageAvatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  
`
const UserName = styled.Text`
  font-size: 19px;
  font-weight: 600;
  margin-left: 20px;
  color: white;
`
const Profile = () => {
  return (
   <Container>
     <ColumnContainer>
      <Avatar>
      <ImageAvatar source={Poster}></ImageAvatar>
      </Avatar>
      <UserName>Paul - Phuoc Pham</UserName>
    </ColumnContainer>
   </Container>
  )
}

export default Profile