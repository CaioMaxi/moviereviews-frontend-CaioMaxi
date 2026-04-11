import { useState, useEffect } from "react";
import type { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard";

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);

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
            <div className="container text-center">
                <div className="row row-cols-auto">
                    {
                        movies.length > 0 && (
                            movies.map(movie => (
                                <MovieCard movie={movie} />
                            ))
                        )
                    }
                </div>
            </div>
        </>
    );
}