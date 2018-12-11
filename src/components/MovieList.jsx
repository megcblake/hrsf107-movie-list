import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggled: false
		}
	}

	handleToggleClickWatched(event) {
		this.setState({toggled: true});
		event.preventDefault();
	}

	handleToggleClickToWatch(event) {
		this.setState({toggled: false});
		event.preventDefault();
	}

	render() {
		return (
			<div className="full-list">
				<button className="watchedToggle" onClick={this.handleToggleClickWatched.bind(this)}>
					Watched
				</button>
				<button className="toWatchToggle" onClick={this.handleToggleClickToWatch.bind(this)}>
					To Watch
				</button>
				<ul className="ulList">
					{this.state.toggled ? 
						this.props.movies.filter(movie => 
							movie.watched === true
						).map(movie => 
							<MovieListEntry movie={movie} key={movie.title} handleWatchedClick={this.props.handleWatchedClick} />
						) : this.props.movies.filter(movie => 
							movie.watched === false
						).map(movie => 
							<MovieListEntry movie={movie} key={movie.title} handleWatchedClick={this.props.handleWatchedClick} />
						)
					}
				</ul>
			</div>
		)
	}
}

export default MovieList;