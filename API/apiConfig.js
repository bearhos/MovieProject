const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '24db0152de70d6a83c73e515cb7472d6',
    session_id: '112cf99b660c15fd3a605b98ba68bf30bde46ca4',
    list_id: '8206765',
    originalImage: (imgPath) =>  `https://image.tmdb.org/t/p/original/${imgPath}`
      ,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;