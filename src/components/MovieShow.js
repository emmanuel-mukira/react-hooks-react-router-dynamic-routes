import React from "react";
import {useParams} from "react-router-dom";

function MovieShow({movies}) {
    const params=useParams();
    //he useParams() hook returns an object of key-value pairs of URL parameters. 
    //In this code, the params object contains the value of the movieId parameter from the URL.
    console.log(params)
  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;