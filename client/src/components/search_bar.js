import React, {Component} from 'react';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			"keyword":""
		}
	}

	handleSubmit = () => {
		this.props.searchedFor(this.state.keyword)
	}

	render() {
		return (
			<div className="search-bar w-50 mt-5 mb-5 mx-auto">
				<form action="javascript:voud(0)" className="input-group" onSubmit={this.handleSubmit}>
					<input className="form-control"
					placeholder="Search"
					value = {this.state.keyword}
					onChange={event => this.setState({keyword:event.target.value})} required/>
					<div className="input-group-append">
						<button
							type="submit"
							className="btn btn-primary">
								search
						</button>
					</div>
				</form>
			</div>
		);
	}
}


export default SearchBar;
