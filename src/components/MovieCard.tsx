import { Link } from "react-router";
import type { Movie } from "../types/Movie";

export default function MovieCard(props: { movie: Movie }) {
    return (
        <Link key={props.movie.id} to={`/details/${props.movie.id}`} className="mb-4 text-decoration-none mx-auto">
            <div className="col card border-light h-100 bg-black thumbnail">
                <img src={props.movie.imageURL} alt={props.movie.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-light mb-0">{props.movie.title}</h5>
                </div>
                <div className="card-footer">
                    <p className="card-text text-light mb-0">{props.movie.averageRating} out of 5</p>
                    <div className="progress mx-4 mb-1" role="progressbar" aria-label="Default striped example" aria-valuenow={props.movie.averageRating} aria-valuemin={0} aria-valuemax={5}>
                        <div className="progress-bar progress-bar-striped bg-danger" style={{ width: (props.movie.averageRating * 100 / 5) + "%" }}></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
