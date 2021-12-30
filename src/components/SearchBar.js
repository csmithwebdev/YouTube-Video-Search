import React from 'react';

class SearchBar extends React.Component {

	state = { searchTerm: '' }; /*Step 1.*/

	userInput = (event) => { /*Step 4.*/
		this.setState({searchTerm: event.target.value}); /*Step 5.*/
		//Take the value of our input out of the event object and assign it to our state property.

	};

	userSubmit = (event) => {
		event.preventDefault(); /*Step 7.*/

		this.props.onFormSubmit(this.state.searchTerm); // This passes the search term back to our parent component into the searchTermSubmit Function. So we can just call "searchTerm" now. where we then call another function to make the api request.
	};

	render() {

		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.userSubmit /*Step 6.*/} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input 
						type="text" 
						value={this.state.searchTerm /*Step 2.*/} 
						onChange={this.userInput /*Step 3.*/}
						/> 
					</div>
				</form>
			</div>
		);

		console.log(this.state.searchTerm);
	} 
}


export default SearchBar;