import apiConfig from "./apiConfig";
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
        const url = `${category[cate]}/${movieType[type]}?api_key=${apiConfig.apiKey}` ;
        return axiosClient.get(url, params);
    },
    getDetail: (cate,id, params) => {
        const url = `${category[cate]}/${id}?api_key=${apiConfig.apiKey}` ;
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type] ;
        return axiosClient.get(url, params);
    },
    getVideos: (cate,id) => {
        const url = `${category[cate]}/${id}/videos?api_key=${apiConfig.apiKey}&language=en-US`
        return axiosClient.get(url);
    },
    getList: (id,params) => {
        const url = 'list/' + id;
       
        return axiosClient.get(url,params);
    },
    getStatusList: (id,id_media) => {
        const url = `list/${id}/item_status?api_key=${apiConfig.apiKey}&movie_id=${id_media}`
        return axiosClient.get(url);
    },
    getLoveList: (id,params) => {
        const url = `list/${id}?api_key=${apiConfig.apiKey}&sort_by=created_at.desc`
        return axiosClient.get(url,params);
    },
    addList: (id,data) => {
        const url =`list/${id}/add_item?api_key=${apiConfig.apiKey}&session_id=${apiConfig.session_id}`
        return axiosClient.post(url,data);
    },
    removeList: (id,data) => {
        const url =`list/${id}/remove_item?api_key=${apiConfig.apiKey}&session_id=${apiConfig.session_id}`
        return axiosClient.post(url,data);
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate]+`?api_key=${apiConfig.apiKey}`;
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