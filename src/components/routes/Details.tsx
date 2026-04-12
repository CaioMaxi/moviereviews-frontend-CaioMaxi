import { useState, useEffect } from "react";
import { useParams } from "react-router";
import type { Movie } from "../../types/Movie";
import type { Review } from "../../types/Review";
import MovieDetailCard from "../MovieDetailCard";

export default function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState<Movie>();
    const [review, setReview] = useState<Review[]>([]);

    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movie/' + id); // e.g. https://localhost:7195/api/movies/2
            const movie = await res.json();
            setMovie(movie)
        }

        const fetchDataReview = async () => {
            const res = await fetch(import.meta.env.VITE_API_HOST + 'api/moviereviews?movieId=' + id); // e.g. https://localhost:7195/api/moviereviews?movieId=4
            const review = await res.json();
            setReview(review)
        }

        fetchDataMovie()
        fetchDataReview()
    }, []) // run only once

    return (
        <>
            <MovieDetailCard movie={movie} review={review}/>
        </>
    );
}