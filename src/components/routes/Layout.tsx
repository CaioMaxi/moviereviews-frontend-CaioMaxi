import { Link, Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <nav className="navbar">
                <div className="container mb-4">
                    <Link className="navbar-brand" to="/">
                        <img src="" alt="MovieReviews" /> {/*Gengar image is a logo placeholder*/}
                    </Link>
                </div>
            </nav>

            <header className="container">
                {/* <h1>MovieReviews</h1> */}
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container mt-4">
                <p className="text-muted">Copyright 2026 - MovieReviews</p>
            </footer>
        </>
    )
}