import { Link, useParams } from "react-router";

export default function Details() {
    const { id } = useParams();

    // const [movie, setMovie] = useState<Movie>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(import.meta.env.VITE_API_HOST + 'api/movies' + id); // e.g., https://localhost:7195/api/movies/2
    //         const movie = await res.json();
    //         setMovie(movie)
    //     }

    //     fetchData()
    // }, []) // run only once

    return (
        <>
            <h2>Details - display movie by id = {id}</h2>
            <p>
                Go to home page. <Link to='/'>Home</Link>
            </p>
        </>
    );
}