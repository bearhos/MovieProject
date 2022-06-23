import { View, Text,FlatList,Animated, Image,ImageBackground, ScrollView, Linking } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/native'
import Header from '../components/Details/Header'
import Content from '../components/Details/Content'
import apiConfig from '../API/apiConfig'
import movieAPI, { category, movieType } from '../API/movieApi'
import TopNavigation from '../components/Details/TopNavigation'
import DummyText from '../components/Details/DummyText'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient"
import { useDispatch, useSelector } from 'react-redux'
import { getStatusWishList, getAddWishList, getDetail, getRemoveWishList, getVideo} from '../API/redux/movieSlice'



export const BANNER_H = 350;
export const TOPNAVI_H = 50;

const Container = styled.View`
  background-color: #15141F;
`;
const Playbutton = styled.View`
  height: 90px;
  width: 90px;
  border-radius: 45px;
 background-color:rgba(2, 2, 2, 0.4);
  position: absolute;
  top: 120px;
  left: 160px;
  z-index: 100;
  justify-content: center;
  align-items:center;
`;
const HeartIcon = styled.View`
  height: 50px;
  width: 50px;
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 30px;
`;

const Detail = ({navigation,route}) => {
  const [idItem, setId] = useState('')
 
  const scrollA = useRef(new Animated.Value(0)).current;
  const [movieItem, setMovieItems] = useState([])
  const [Details, setDetaisItems] = useState([])
  const [genres, setGenres] = useState([])
  const [like, setLike] = useState(false)
  const [value, setvalues] = useState({
    
  })
  const {details,statusList,wishList,moviesList,video} = useSelector((state) => ({...state.movies}))
  const dispatch = useDispatch()
useEffect(() => {

  dispatch(getStatusWishList(route.params.id))
  dispatch(getVideo([route.params.cate,route.params.id]))
  
  const getMovies = async () =>{
    const params = {page:1}
    try{
      const response = await movieAPI.getMoviesList(route.params.cate  ? route.params.cate : category.movie,movieType.popular,{params});
      setMovieItems(response.results)
     
    }
    catch (err){
      console.log(err)
    }
  }
 
  getMovies()
  dispatch(getDetail([route.params.cate, route.params.id]))
  setDetaisItems(details)
  setGenres(details?.genres)
  setLike(statusList)
}, [dispatch,setLike,like])


const AddList = () =>{
  setLike(!like)
  setvalues({
    media_id: idItem
  })
  dispatch(getAddWishList({
    media_id: route.params.id
}))
}
const RemoveList = () =>{
  setLike(!like)
  dispatch(getRemoveWishList({
    media_id: route.params.id
}))


}
  return (
   <Container>
     <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{uri: `${apiConfig.originalImage(details?.backdrop_path)}`}}
          >
          </Animated.Image>
        </View>
          <LinearGradient
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={['transparent','#020202']}    
            style={{
              height: 200,
              width: '100%',
              top: 160,
              paddingHorizontal: 24,
              position: 'absolute',
              zIndex: 100,
            }}      >

          </LinearGradient>
          <Playbutton  > 
            <Icon name="play" size={45} color="rgba(255, 162, 3, 0.93)" onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video?.key}`)}>
            </Icon>
          </Playbutton>
          <HeartIcon >
            {  statusList ?   <Icon name="heart-sharp" color="red" size={45}  onPress={ ()=> RemoveList()}></Icon> : <Icon name="heart-outline" color="white" size={45} onPress={ ()=> AddList()}></Icon>}
            
          </HeartIcon>
         
        <Content movieItem={movieItem} Details={details} genres={genres} video={video}></Content>
      </Animated.ScrollView>
   </Container>
  )
}
const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
    flex:1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default Detail