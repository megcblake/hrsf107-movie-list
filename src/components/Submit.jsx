import React from 'react';

var Submit = (props) => (
	<form onSubmit={props.handleMovieSubmit} >
    <input type="text" placeholder="Add movie title here" onChange={props.handleMovieChange} />
  	<input type="submit" value="Add" />
	</form>
)

export default Submit;