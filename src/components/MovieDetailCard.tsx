import type { Movie } from "../types/Movie";
import type { Review } from "../types/Review";

export default function MovieDetailCard(props: { movie: Movie | undefined, review: Review[] }) {
    return (
        <>
            <div className="card mb-5 mt-4 border-light bg-black mx-auto">
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
                            <p className="card-text mb-1">{props.movie?.runtime} minutes</p>
                            <p className="card-text mb-1">{props.movie?.genre}</p>
                            <p className="card-text mb-3">{props.movie?.rating}</p>
                            <p className="card-text">{props.movie?.releaseDate.substring(0, 10)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {props.review && props.review.length > 0 ? (
                <div id="carouselAutoplaying" className="carousel slide w-75 container mb-5 mx-auto" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {props.review.map((rev, index) =>
                            <div className={`carousel-item ${index === 0 ? 'active' : ''} text-center`}>
                                <div className="card bg-black p-2 text-light border-light">
                                    <div className="card-header">
                                        <h5 className="card-title">{rev.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text mb-0">{rev.reviewRating} out of 5</p>
                                        <div className="progress mx-auto text-center w-25 mb-4" role="progressbar" aria-label="Default striped example" aria-valuenow={rev.reviewRating} aria-valuemin={0} aria-valuemax={5}>
                                            <div className="progress-bar progress-bar-striped bg-danger" style={{ width: (rev.reviewRating * 100 / 5) + "%" }}></div>
                                        </div>
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
            ) : (
                <div id="carouselAutoplaying" className="carousel slide w-75 container mb-5 mx-auto" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <div className="card bg-black p-2 text-light border-light">
                                <div className="card-header">
                                    <h5 className="card-title">This Movie Has Not Been Reviewed Yet</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
