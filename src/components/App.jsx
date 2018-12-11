import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import Submit from './Submit.jsx';
import MovieListEntry from './MovieListEntry.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			movies: [],
			queriedMovies: null,
			movieToAdd: ''
		}
	}

	handleSearchChange(event) {
		this.setState({query: event.target.value});
	}

	handleSearchSubmit(event) {
		var tempArr = [];
		tempArr = this.state.movies.filter(movie => 
			movie.title === this.state.query || movie.title.indexOf(this.state.query) > -1
		);
		this.setState({queriedMovies: tempArr});
		event.preventDefault();
	}

	handleMovieChange(event) {
		this.setState({movieToAdd: event.target.value});
	}

	handleMovieSubmit(event) {
		this.setState({movies: this.state.movies.concat({title: this.state.movieToAdd, watched: false})});
		event.preventDefault();
		console.log(this.state.movies.title);
	}

	handleWatchedClick(event) {
		this.setState({title: this.state.movies.title, watched: !this.state.movies.watched});
		event.preventDefault();
		console.log('watched is', this.state.movies.watched);
	}

	render() {
		return (
			<div id="bod">
				<div className="nav">
					<Submit handleMovieChange={this.handleMovieChange.bind(this)} handleMovieSubmit={this.handleMovieSubmit.bind(this)} />
					<SearchBar handleSearchChange={this.handleSearchChange.bind(this)} handleSearchSubmit={this.handleSearchSubmit.bind(this)} />
				</div>
				<div className="list">
					{this.state.queriedMovies ? <MovieList movies={this.state.queriedMovies} handleWatchedClick={this.handleWatchedClick.bind(this)} /> : <MovieList movies={this.state.movies} handleWatchedClick={this.handleWatchedClick.bind(this)} /> }
				</div>
			</div>
		);
	}
}

export default App;