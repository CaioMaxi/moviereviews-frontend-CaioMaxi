import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import type { Movie } from "../../types/Movie";
import type { Review } from "../../types/Review";

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
            <h2>Details - {movie?.title}</h2>
            <dl>
                <img src={movie?.imageURL} alt={movie?.title} className="w-15" />
                <div>
                    <dl className="row">
                        <dt className="col-sm-2">Title</dt>
                        <dd className="col-sm-10">{movie?.title}</dd>
                        <dt className="col-sm-2">Synopsis</dt>
                        <dd className="col-sm-10">{movie?.synopsis}</dd>
                        <dt className="col-sm-2">Runtime</dt>
                        <dd className="col-sm-10">{movie?.runtime}</dd>
                        <dt className="col-sm-2">Release Date</dt>
                        <dd className="col-sm-10">{movie?.releaseDate}</dd>
                    </dl>
                </div>
                <div>
                    <dl className="row">
                        {review.map((rev =>
                            <>
                                <dt className="col-sm-2">Name</dt>
                                <dd className="col-sm-10">{rev.name}</dd>
                                <dt className="col-sm-2">Review</dt>
                                <dd className="col-sm-10">{rev.reviewRating}</dd>
                                <dt className="col-sm-2">Critic</dt>
                                <dd className="col-sm-10">{rev.critic}</dd>
                            </>
                        ))}
                    </dl>
                </div>
            </dl>
            <p>
                Go to home page. <Link to='/'>Home</Link>
            </p>
        </>
    );
}