import {View, Text, Image, FlatList,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ReadMore from 'react-native-read-more-text';
import apiConfig from '../../API/apiConfig';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex: 2;
  background-color: #15141f;
  height: 100%;
  width: 100%;
  padding-left: 20px;
`;
const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  
  
  
`;
const Title = styled.Text`
  font-size: ${props => props.size}px;
  color: white;
  font-weight: 700;
  font-family: 'Lato-Light';
  margin-top: ${props => props.marginTop || 5}px;
  align-self: ${props => (props.center ? 'center' : 'auto')};

`;
const SubText = styled.Text`
  font-size: 16px;
  color: #bcbcbc;
  font-weight: 300;
  font-family: 'Lato-Light';
  align-self: ${props => (props.center ? 'center' : 'auto')};
  margin: ${props => (props.margin ? '10px 0px' : '0px')};

`;
const Divider = styled.View`
  height: 1px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  background-color: #515151;
  justify-content: center;
`;

const DetailContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  height: 120px;
`;
const ReatingContainer = styled.View`
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin: 10px 0px;
`;
const TimeContainer = styled.View`
  flex: 3;
`;
const GenreContainer = styled.View`
  flex: 4;
`;
const GenreBox = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Genre = styled.View`
  height: 35px;
 
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  backdrop-filter: blur(4.9px);
  background-color: #2a2a2b;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;
const RelatedContainer = styled.View`
  height: 250px;
  
  align-items: center;


`;
const RelatedImage = styled.Image`
  height: 106px;
  width: 142px;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;

`;
const RelatedText = styled.Text`
  font-size: 14px;
  width: 145px;
  line-height: 19px;
  color: white;
  font-weight: 300;
  padding-left: 2px;
  margin-left: 10px;
  
  font-family: 'Lato-Light';

`;
const Quality = styled.View`
  height: 30px;
  
  border: 1px solid #ccc;
  border-radius: 7px;
  backdrop-filter: blur(4.9px);
  background-color: #2a2a2b;
  margin-top: 20px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;
const QualityText = styled.Text`
  font-size: 16px;
  color: #bcbcbc;
  padding: 0px 10px;
  font-weight: 300;
  align-self: ${props => (props.center ? 'center' : 'auto')};
  margin: ${props => (props.margin ? '10px 0px' : '0px')};

`;
const Content = ({movieItem,Details,genres}) => {

 
  
  const renderItem = ({item}) =>{
    return (
      <TouchableOpacity>
      <RelatedContainer>
        <RelatedImage source={{uri: `${apiConfig.originalImage(item.backdrop_path)}`}}></RelatedImage>
        <RelatedText >{item.title || item.name}</RelatedText>
      </RelatedContainer>
      </TouchableOpacity>
    )
};
  return (
    <Container>
      <TitleContainer>

      <Title size={25} marginTop={20} >
        {Details.title ||Details.name }
      </Title>
      <Quality><QualityText center>4K</QualityText></Quality>
      </TitleContainer>
      <ReatingContainer>
      <SubText><Icon name="stopwatch-outline" size={16} color="white"></Icon> {Details.runtime ? Details.runtime + ' minutes' : Details.number_of_episodes +' episode' } </SubText>
      <SubText><Icon name="star" size={16} color="white"></Icon> {Details.vote_average} (IMDb)</SubText>
      </ReatingContainer>

      <Divider />
      <View>
      <DetailContainer>
        <TimeContainer>
          <Title size={20}>Release Date</Title>
          <SubText size={14} margin>
            {Details.release_date || Details.first_air_date} 
          </SubText>
        </TimeContainer>
        <GenreContainer>
          <Title size={20}> Genre</Title>
          <GenreBox>
            
              
                {genres.map((item,key)=>{
                  return(
                    <Genre key={item.id}>

                      <SubText center>{item.name}</SubText>
                       </Genre>

                    
                  )
                })}
          
        
              
          
            
          </GenreBox>
        </GenreContainer>
      </DetailContainer>
      </View>
      <Divider />
      <Title size={20} marginTop={20}>
        Synopsis
      </Title>
      <View>

        <ReadMore
          numberOfLines={2}
          renderTruncatedFooter={handlepress => {
            return (
              <Text
                style={{color: 'white', marginTop: 5,fontSize: 16}}
                onPress={handlepress}>
                Read More..
              </Text>
            );
          }}
          renderRevealedFooter={handlepress => {
            return (
              <Text
                style={{color: 'white', marginTop: 5 ,fontSize: 16}}
                onPress={handlepress}>
                Show Less
              </Text>
            );}}>
      
          <SubText>
           {Details.overview ? Details.overview :'Rey (Daisy Ridley) finally manages to find the legendary Jedi knight, Luke Skywalker (Mark Hamill) on an island with a magical aura. The heroes of The Force Awakens including Leia, Finn Read more..'}
           </SubText>
        </ReadMore>
      </View>
      <Title size={20} marginTop={20}>
        Related Movies
      </Title>
      <FlatList  
        horizontal
        data={movieItem}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}>

      </FlatList>

    </Container>
  );
};

export default Content;
