import React, {useEffect, useRef, useState, useMemo} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearTextGradient } from "react-native-text-gradient";
import MasonryList from 'react-native-masonry-list';
import apiConfig from '../API/apiConfig';
import movieAPI, {category, movieType} from '../API/movieApi';
import MasonryComponent from '../components/MasonryComponent';
import SearchInput from '../components/SearchInput';
import TabText from '../components/TabText';
import { getMovies, getMovieSearch, setMovieSearch } from '../API/redux/movieSlice';


var min = 720;
var max = 1920;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const ImageComponent = () => {
  return <Image style={{height: 30}}></Image>;
};
const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #15141f;
`
const Title = styled.Text`
  font-size : 25px;
  color: white;
  margin: ${props => props.margin}px;
`;
const TabsContainer = styled.View`
  
  flex-direction: row;
  justify-content: space-around;
  margin: 8px;
  `;

const Home = ({navigation}) => {
  

  const [movieItem, setMovieItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [tabActive, setTabActive] = useState(1);
  const Image = [];
  const Search = [];
  const Result = [];
  const {moviesList,searchList,wishList} = useSelector((state) => ({...state.movies}))
  const dispatch = useDispatch()
  useEffect(() => {
    


   
     if(searchValue.length >=2){

       dispatch(getMovieSearch([tabActive === 1 ? category.movie : category.tv,{query:searchValue,page: 1 }]))
     }else{
      dispatch(getMovies([tabActive === 1 ? category.movie : category.tv,tabActive === 3 ? movieType.top_rated :  tabActive === 4 ? movieType.on_the_air: movieType.popular]))
     }
  
  }, [dispatch,tabActive,searchValue,setSearchValue]);
  
  const getImages = () => {
    moviesList?.map((item, key) => {
      Image.push({
        uri: `${apiConfig.originalImage(item.poster_path)}`,
        title: item.title,
        name: item.name,
        id: item.id,
        cate: tabActive === 1 ? category.movie : category.tv
      });
    });
  };
  const getSearch = () => {
    searchList?.slice(0,5).map((item, key) => {
      Search.push({
        uri: `${apiConfig.originalImage(item.poster_path)}`,
        title: item.title,
        name: item.name,
        id: item.id,
        cate: tabActive === 1 ? category.movie : category.tv
      });
    });
  };
  getImages();
  getSearch()
 
  return (
    <Container >
      <Title margin ={20}>Find Movies, Tv series, and more..</Title>
      <SearchInput handleOnchange={setSearchValue} value={searchValue} ></SearchInput>

      <TabsContainer>
        {tabActive === 1 ?<LinearTextGradient
        style={styles.btnActive}
        locations={[0, 1]}
        colors={["#FF8F71", "#EF2D1A"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.underline}>
          Mo 
        </Text>
        <Text>vies</Text>
        
      </LinearTextGradient> : <Text style={styles.btn} onPress={()=> setTabActive(1)}> Movies</Text> }
      {tabActive === 2 ?<LinearTextGradient
        style={styles.btnActive}
        locations={[0, 1]}
        colors={["#FF8F71", "#EF2D1A"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <Text>TV Series</Text>
      </LinearTextGradient> : <Text style={styles.btn} onPress={()=> setTabActive(2)}> TV Series</Text> }
      {tabActive === 3 ?<LinearTextGradient
        style={styles.btnActive}
        locations={[0, 1]}
        colors={["#FF8F71", "#EF2D1A"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <Text>Documentary</Text>
      </LinearTextGradient> : <Text style={styles.btn} onPress={()=> setTabActive(3)}> Documentary</Text> }
      {tabActive === 4 ?<LinearTextGradient
        style={styles.btnActive}
        locations={[0, 1]}
        colors={["#FF8F71", "#EF2D1A"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <Text>Sports</Text>
      </LinearTextGradient> : <Text style={styles.btn} onPress={()=> setTabActive(4)}> Sports</Text> }
     
              
              
             
      </TabsContainer>
        
      
      <MasonryList
        images={searchValue.length >1 ? Search : Image}
        columns={2}
        backgroundColor="#15141f"
        spacing={4}
        completeCustomComponent={props => <MasonryComponent {...props} navigatione={navigation}  tabActive={tabActive} />}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15141f',
  },
  image: {
    height: 300,
  },
  userPic: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    color: '#fafafa',
    fontWeight: 'bold',
  },
  btn:{
    fontSize: 16,
    color: 'white',
    fontFamily:'Lato-Bold'
  },
  btnActive:{
    fontSize: 17,
    fontFamily:'Lato-Bold',
  },
  underline:{
    textDecorationLine: 'underline',
  }
});

export default Home;
