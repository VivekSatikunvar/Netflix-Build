import React from 'react';
import './Details.css';


function Details() {
    return (
        <div className='details'>
            <div className='details__box'>
              
            <header className='banner' style={{
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundSize:'cover',
            backgroundPosition:"center center",
        }} />
                {/* {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />} */}
               
            </div>
        </div>
    )
}

export default Details
