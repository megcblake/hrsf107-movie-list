import React from 'react';

var SearchBar = (props) => (
	<form onSubmit={props.handleSearchSubmit}>
   <input type="text" placeholder="Search..." onChange={props.handleSearchChange} />
   <input type="submit" value="Submit" />
  </form>
)

export default SearchBar;