import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const mykey = config.MY_KEY;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({
			key: mykey,
			term: 'dashiexp'}, 
			(videos) => {
				this.setState({ videos }); //this.setState({videos:videos}) key and property have same name
			});
		}

	render() {
		return ( 
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
