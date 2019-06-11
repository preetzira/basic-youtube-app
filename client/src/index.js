import _ from 'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import './index.css'

const API_KEY = "PUT_YOUR_YOUTUBE_API_KEY_HERE";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		}
		this.videoSearch('yoyo')
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term: term}, videos =>{
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
		})
	}

	render(){
			const videoSearch = _.debounce(term => { this.videoSearch(term) },300);
			return (
				<div className="mb-5">
					<SearchBar searchedFor={videoSearch}/>
					<div className="row">
						<VideoDetail video={this.state.selectedVideo} />
						<VideoList
							onVideoSelect={selectedVideo => this.setState({selectedVideo})}
							videos={this.state.videos} />
					</div>
				</div>
			);
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));
