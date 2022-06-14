import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import Poster  from '../assets/Poster.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getWishList } from '../API/redux/movieSlice';
import movieAPI, { account_id, category, Id, list_id, movieType, sessionId } from '../API/movieApi';
import apiConfig from '../API/apiConfig';
const Container = styled.ScrollView`
    flex: 1;
    background-color: #15141f;
`
const Title = styled.Text`
    margin: 10px;
    font-size: 27px;
    font-weight: 700;
    font-family: 'Lato-Light';
    color: white;


`
const ListContainer = styled.View`
    flex: 1;
    align-items:center;
`;
const ItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    height: 150px;
    width: 90%;
    margin: 10px;
    background-color: #211f38;
    border-radius: 20px;
    overflow: hidden;


`;
const ItemLeft = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const ImageVideo = styled.Image`
    height: 150px;
    width: 100%;
    border-radius: 20px;


`
const ItemRight = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TitleVideo = styled.Text`
    font-size: 18px;
    font-family: 'Lato-Bold';
    padding: 5px;
    color:white;
`
const IconDele = styled.View`
    position: absolute;
    right: 20px;
    top: 10px;

`;


const List = ({navigation}) => {

    const [results, setMovies] = useState([])
    const {moviesList,wishList} = useSelector((state) => ({...state.movies}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWishList({page:1}))
        
        // const getRecipes = async () => {
        //     const response = await fetch(
        //       `https://api.themoviedb.org/3/list/8206765?api_key=24db0152de70d6a83c73e515cb7472d6&language=en-US`
        //     );
        //     const data = await response.json()
        //     setMovies(data.items)
        // }
        // getRecipes()
        setMovies(wishList)

    }, [dispatch])

  return (

    <Container>
        <Title>Favorites List</Title>   
        <ListContainer>
            {wishList?.map((item,key)=>{
                return (

            <ItemContainer key={item.id} onPress={() => navigation.navigate('Detail',{
                id: item.id,
                cate: 'movie'
            }) }>
                <ItemLeft >
                    <ImageVideo source= {{uri: `${apiConfig.originalImage(item.poster_path)}`}}></ImageVideo>
                </ItemLeft>
                <ItemRight>
                    <TitleVideo>{item.title}</TitleVideo>
                </ItemRight>
               <IconDele ><Icon name='ios-close' size={22} color='white' onPress={()=> console.log(item.id)}></Icon></IconDele>
            </ItemContainer>
                )
            })}
        </ListContainer>
    </Container>
        
  )
}

export default List