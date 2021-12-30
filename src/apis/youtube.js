import axios from 'axios';

const KEY = 'AIzaSyBEe8WHXgQw0_hGDE8dmX0PJo6uJLMpTD8';

//create an instance of AXIOS
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',

	//params contain all the different query sting paramets we want added onto the request. 
	//These parameters come from the YouTube API documentation for 'list' queries.
	params: {
		part: 'snippet',
		type: 'video', // added this after getting warning: each child in list should have a unique "key" prop even after adding key prop.
		maxResults: 5,
		key: KEY // this doesn't come from YT api, but we know we need it in the url query
	}


});