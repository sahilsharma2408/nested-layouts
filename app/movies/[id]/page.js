import { use } from "react";

async function getMovieDetails(id) {
    const res = await fetch(`http://localhost:3001/movies/${id}`);

    return res.json();
}

export default function Page({params}) {
    const movieDetails = use(getMovieDetails(params.id));

    return (
        <div>
           <p className="text-3xl">{movieDetails.title}</p>
           <p className="mt-2">Year: {movieDetails.year}</p>
           <p className="mt-2">{movieDetails.description}</p>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3001/movies');
    const movies = await res.json();

    return movies.map((movie) => ({ id: movie.id }))
}