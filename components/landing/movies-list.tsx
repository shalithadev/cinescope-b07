// import { Fragment } from "react";
// import { MOVIES_DATA } from "@/lib/data";

// import { MOVIES_DATA } from "@/lib/data"; // Hardcoded movies data
import { getMovies } from "@/actions/movies"; // Server action to fetch movies from the API
import MovieCard from "./movie-card";

/**
 * React Fragments
 */

export async function MoviesList() {
  const movies = await getMovies();

  if (!movies || movies.length === 0) {
    return (
      <div className="text-red-600 text-center py-12">No movies available.</div>
    );
  }

  return (
    <>
      <div className="text-muted-foreground text-sm">
        Showing 5 of 100 movies.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={`movie-${movie._id}`} movie={movie} />
        ))}
      </div>
    </>
  );
}
