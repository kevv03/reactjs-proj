import { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import Error from './Error';
import Searcher from './Searcher';
import '../styles/GetMovies.css'

function GetMovies() {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=4172020f5ab69080c1a6c82f9bd18fe8&page=";
    const [movies, setMovies] = useState();
    const [searcher, setSearcher] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(1)

    const handleLess = () =>{
        setCounter(counter-1);
    }
    const handleAdd = () =>{
        setCounter(counter+1);
    }
    const final = url + counter;

    useEffect(()=> {
    fetch(final)
    .then(res => res.json())
    .then(data => setMovies(data.results))
    //eslint-disable-next-line no-unused-vars
    .catch(_err => setIsError(true))
    .finally(() => setIsLoading(false))
    },[final])

    if(counter<1){
        return <>
                <Error />
            </> 
    }

    if(counter>500){
        return <>
            <Error />
            </> 
    }

    return (
        <>  
            <div className='buscadorybotones'>
                <div className='buscador'>
                    <Searcher setSearcher={setSearcher}/>
                </div>
                <div className='nandp'>
                    <button onClick={handleLess}>ANTERIOR</button>
                    <button onClick={handleAdd}>SIGUIENTE</button>
                </div>
            </div>
            {isLoading? <h5>CARGANDO...</h5>
                :
                isError? <h5>ERROR...</h5>
                    :
                    movies.filter((mov)=> mov.original_title.toLocaleLowerCase().includes(searcher.toLocaleLowerCase())).map((movie) =>(
                        <MoviesList movie={movie} key={movie.id}/>
                    ))
            }
        </>
    );
}

export default GetMovies
