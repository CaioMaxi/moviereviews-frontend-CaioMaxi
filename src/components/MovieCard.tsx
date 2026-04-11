import { Link } from "react-router";
import type { Movie } from "../types/Movie";

export default function MovieCard(props: { movie: Movie }) {
    return (
        <Link key={props.movie.id} to={`/details/${props.movie.id}`} className="mb-4 text-decoration-none">
            <div className="col card border-light h-100 bg-black thumbnail">
                <img src={props.movie.imageURL} alt={props.movie.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-light ">{props.movie.title}</h5>
                </div>
                <div className="card-footer">
                    <p className="card-text text-light ">{props.movie.averageRating} out of 5</p>
                </div>
            </div>
        </Link>
    )
}
