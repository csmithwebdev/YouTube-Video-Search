import React from 'react';
import SearchBar from './SearchBar';
import youtube from'../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

	state = {videos: [], selectedVideo: null }; // step 5. set the response we get from api as state.

	componentDidMount() {
		this.searchTermSubmit('cu*answers');
	}

	searchTermSubmit = async (searchTerm) => { // Step 1. create callback 
		// This is where we'll create the query stings to tell the api what we want.
		const response = await youtube.get('/search', { // Step 3. youtube is now a preconfig
			params: {
				q: searchTerm
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0] //display the first video in the array onload
		});

	};

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video});

	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.searchTermSubmit /*step 2. these are called props btw, this is actually dope, because your calling a function above but also we're passing this prop to serachbar.js and passing setting the prop value here as the search term */} />

				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /> {/*passing in the videos to child component so we can create a list.*/}
						</div>

					</div>
				</div>
				
			</div>
		);
	}
}

export default App;