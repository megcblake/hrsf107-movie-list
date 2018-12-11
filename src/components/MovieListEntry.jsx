import React from 'react';

var MovieListEntry = (props) => (
	<div className="listItem">
		<li>
			{props.movie.title}
			<button className="listWatchButton" onClick={props.handleWatchedClick}>
				{props.movie.watched ? 'Watched' : 'To Watch'}
			</button>
		</li>
	</div>
);

export default MovieListEntry;