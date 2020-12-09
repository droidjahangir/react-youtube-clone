import axios from 'axios'

const KEY = 'AIzaSyA4op6uBB2eNVOotV1wBJPBUs7TqzUchpc'

// const url ='https://www.googleapis.com/youtube/v3/search'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
