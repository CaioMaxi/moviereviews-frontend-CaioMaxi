import { useState, useEffect } from "react";
import type { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard";

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movies'); // e.g., https://localhost:7195/api/movies
            const movies = await res.json();
            setMovies(movies)
        }

        fetchData()
    }, []) // run only once

    return (
        <>
            <div className="mt-4 w-50 mx-auto">
                <form className="d-flex" role="search" 
                onChange={(e) => setInputValue(e.target.value)}
                onSubmit={(e) => {
                    setQuery(inputValue)
                    e.preventDefault()
                }}>
                    <input className="form-control me-2" type="search" placeholder="Search Title" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>

            <div className="container text-center mt-4">
                <div className="row row-cols-auto">
                    {
                        movies.length > 0 && (
                            movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
                                .map(movie => (
                                    <MovieCard movie={movie} />
                                ))
                        )
                    }
                </div>
            </div>
        </>
    );
}