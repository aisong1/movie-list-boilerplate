import React from 'react';

var AddMovie = (props) => (
  <form id="addBar" className="addBar" onSubmit={(e) => props.handleAddSubmit(e)}>
    <input 
      type="text"
      placeholder="Add movie title here"
      onChange={(e) => props.handleAddChange(e)}
    />
    <button className="addMovieButton">
      Add
    </button>
  </form>    
)

export default AddMovie;