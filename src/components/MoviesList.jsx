import '../styles/MoviesList.css'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import 'boxicons'
import { useState } from 'react'

/* eslint-disable react/prop-types */
function MoviesList({movie}) {
    const[isFullDescription, setIsFullDescription] = useState(false);
    const handleShow = () => {
        setIsFullDescription(!isFullDescription);
    }

    return (
            <div className="carta">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title}/>
                </div>
                <h3>{movie.original_title}</h3>
                {isFullDescription ?
                    <span className='desc'>{movie.overview}<BsFillCaretUpFill onClick={handleShow} /></span>
                        :
                            <span className='desc'>{movie.overview.slice(0,100)}...<BsFillCaretDownFill onClick={handleShow} /></span>
                }
                <div>
                    <p><box-icon type='solid' name='captions'></box-icon>{movie.original_language}</p>
                    <p><box-icon name='star' type='solid' color='#000000' ></box-icon>{movie.vote_average}</p>
                </div>
                <p>Estreno: {movie.release_date}</p>
            </div>
    )
}

export default MoviesList
