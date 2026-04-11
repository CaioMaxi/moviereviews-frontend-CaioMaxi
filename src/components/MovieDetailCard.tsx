import type { Movie } from "../types/Movie";
import type { Review } from "../types/Review";

export default function MovieDetailCard(props: { movie: Movie | undefined, review: Review[] }) {
    return (
        <>
            <div className="card mb-3 border-light bg-black">
                <div className="row g-0">
                    <div className="col-md-4 col-lg-3 col-xl-2">
                        <img src={props.movie?.imageURL} alt={props.movie?.title} className="rounded-start img-fluid" />
                    </div>
                    <div className="col-md-8 col-lg-9 col-xl-9 text-light">
                        <div className="card-header">
                            <h3 className="card-title">{props.movie?.title}</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{props.movie?.synopsis}</p>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">{props.movie?.runtime} minutes</p>
                            <p className="card-text">{props.movie?.releaseDate.substring(0, 10)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {props.review.map(rev =>
                        <div className="carousel-item active text-center">
                            <div className="card bg-black p-2 mb-3 text-light border-dark">
                                <div className="card-header">
                                    <h5 className="card-title">{rev.name}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{rev.reviewRating} out of 5</p>
                                    <p className="card-text">"{rev.critic}"</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
