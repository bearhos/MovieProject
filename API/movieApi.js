import axiosClient, { UserClient } from "./axiosClient";


export const Id = {
    sessionId: '112cf99b660c15fd3a605b98ba68bf30bde46ca4',
    list_id: '8206765',
    account_id: '12521564'
}

export const category = {
    movie: 'movie',
    tv: 'tv',
    movies: 'movies',
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air : 'on_the_air'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const movieAPI = {
    getMoviesList: (cate,type, params) => {
        const url = category[cate] +'/'+ movieType[type] ;
        return axiosClient.get(url, params);
    },
    getCollectionList: (id) => {
        const url = 'collection/' + id;
        return axiosClient.get(url);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (id) => {
        const url = 'movie/' + id;
        return axiosClient.get(url);
    },
    getList: (id,params) => {
        const url = 'list/' + id;
       
        return axiosClient.get(url,params);
    },
    getStatusList: (id,params) => {
        const url = 'list/' + id + '/item_status';
        return axiosClient.get(url,params);
    },
    getLoveList: (id,params) => {
        const url = 'list/' + id;
        return axiosClient.get(url,params);
    },
    addList: (id,session,data) => {
        const url ='list/' + id + '/add_item?session_id='+session ;
        
        return axiosClient.post(url,data);
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default movieAPI;