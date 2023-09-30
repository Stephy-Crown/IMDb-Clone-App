import Image from "next/image";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    // throw new Error(res.statusText); this will be caught by the error page and passed to the page as props
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const { results } = data;
  // OR THIS
  // const data = await res.json();
  // const results = data.results;
  // console.log(results);

  return (
    <main className="">
      <div>
        <Results results={results} />
      </div>
    </main>
  );
}
