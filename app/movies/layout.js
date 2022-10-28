import Link from "next/link";
import { use } from "react";

async function getMovies() {
    const res = await fetch('http://localhost:3001/movies');

    return res.json();
}

export default function Layout({ children }) {
    const movies = use(getMovies());

    return (
        <div className="flex">
            <ul className="pr-10 text-sm flex-none">
                {
                    movies.map((movie) => (
                       <li key={movie.id} className="p-2">
                         <Link
                            href={`movies/${movie.id}`} 
                        >
                            {movie.title}
                        </Link>
                       </li>
                    ))
                }
            </ul>

            <div className="p-4">{children}</div>
        </div>
    )
}
