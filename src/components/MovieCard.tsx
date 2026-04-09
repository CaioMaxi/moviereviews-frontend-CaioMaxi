import type { Movie } from "../types/Movie";

export default function MovieCard(props: { movie: Movie }) {
    return (
        <div className="w-50 pb-3">
            <h3>{props.movie.title}</h3>
            <img src={props.movie.imageURL} alt={props.movie.title} className="img-fluid" />
            <p>{props.movie.averageRating} out of 5</p>
        </div>
    )
}