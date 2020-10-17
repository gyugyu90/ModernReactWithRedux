import axios from 'axios';


const KEY = 'AIzaSyBvOkJyzR51CSMCwW2hHJZmERs8XkcLp3I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
